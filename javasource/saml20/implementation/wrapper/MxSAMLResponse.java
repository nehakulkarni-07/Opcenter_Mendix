package saml20.implementation.wrapper;

import com.mendix.core.Core;
import com.mendix.logging.ILogNode;
import net.shibboleth.utilities.java.support.xml.SerializeSupport;
import org.opensaml.saml.common.SAMLException;
import org.opensaml.saml.saml2.core.Issuer;
import org.opensaml.saml.saml2.core.Response;
import org.opensaml.saml.saml2.core.StatusCode;
import org.opensaml.security.credential.Credential;
import saml20.implementation.common.Constants;
import saml20.implementation.common.Constants.ValidationLevel;
import saml20.implementation.metadata.IdpMetadata.Metadata;

import java.security.cert.X509Certificate;

public class MxSAMLResponse extends MxSAMLObject {
    private static final ILogNode _logNode = Core.getLogger(Constants.LOGNODE);

    private final Response response;

    private MxSAMLAssertion assertion;

    public MxSAMLResponse(Response response) {
        super(response);
        _logNode.debug("Creating response object based on response: " + SerializeSupport.prettyPrintXML(response.getDOM()));
        this.response = response;
    }

    
    public void validateResponseCodeAndDestination(String expectedDestination) throws SAMLException {
        String statusCode = this.response.getStatus().getStatusCode().getValue();
        String msg = "";

        // TODO: verify
        if (!StatusCode.SUCCESS.equals(statusCode)) {

            StatusCode is = this.response.getStatus().getStatusCode().getStatusCode();
            msg = this.response.getStatus().getStatusMessage() == null ? "" : this.response.getStatus().getStatusMessage().getMessage();
            throw new SAMLException("Got StatusCode " + statusCode + (is == null ? "" : "/" + is.getValue()) + " should be " + StatusCode.SUCCESS + ". Message: [" + msg + "]  ID:[" + this.response.getID() + "]");
        }
        if (!isDestinationOK(expectedDestination)) {
            throw new SAMLException("Wrong destination. Expected " + expectedDestination + ", was " + this.response.getDestination() + " ID:[" + this.response.getID() + "]");
        }

    }

    public void validateAssertionEmptyAndResponseToIsSame(String requestId) throws SAMLException {
        if (requestId != null && !requestId.equals(this.response.getInResponseTo())) {
            throw new SAMLException("Wrong InResponseTo. Expected " + requestId + ", was " + this.response.getInResponseTo() + " ID:[" + this.response.getID() + "]");
        }
        if ( this.response.getAssertions().isEmpty() && !isPassive() ) {
            throw new SAMLException("Response must contain an Assertion. If the Response contains an encrypted Assertion, decrypt it before calling validate." + " ID:[" + this.response.getID() + "]");
        }
    }

    public void validateAssertionSignature( MxSAMLAssertion samlAssertion, Metadata metadata ) throws SAMLException {
        boolean valid = false;

        for( X509Certificate certificate : metadata.getSigningCertificates() ) {
            if ( samlAssertion.verifySignature(certificate) ) {
                valid = true;
                break;
            }
        }

        // Fall back to validate against all other certificates
        if ( !valid ) {
            for( X509Certificate certificate : metadata.getCertificates() ) {
                if ( samlAssertion.verifySignature(certificate) ) {
                    valid = true;
                    break;
                }
            }
            if ( !valid )
                throw new SAMLException("The assertion is not signed correctly");
        }
    }

    
    /* Validate the full message signature, if present. Throw exception if invalid signature found. */
    public void validateMessageSignature(Metadata metadata)	throws SAMLException {
        // if it is a passive response, a signature must be present
        if ( isPassive() && !hasSignature()) {
            throw new SAMLException("The response is not signed correctly" + " ID:[" + this.response.getID() + "]");
            // otherwise check signature if present
        } else if (hasSignature()) {
            boolean valid = false;
            for( X509Certificate certificate : metadata.getSigningCertificates() ) {
                if ( verifySignature(certificate) ) {
                    valid = true;
                    break;
                }
            }
            // Fall back to validate against all other certificates
            if ( !valid ) {
                for( X509Certificate certificate : metadata.getCertificates() ) {
                    if ( verifySignature(certificate) ) {
                        valid = true;
                        break;
                    }
                }
                if ( !valid ) {
                    // none of the available certificates matched the signature, or other failure
                    throw new SAMLException("The response is not signed correctly" + " ID:[" + this.response.getID() + "]");
                }
            }
        }
    }

    /**
     * Resolve the IdP Entity id.  The preferred resolution is to retrieve the SSOConfig and EntityDescriptor by the corresponding SAML request.
     * If nothing has been found, it will fallback on the Issuer from the XML message.
     *

     * @return
     * @throws SAMLException
     */
    public String getOriginalIdpEntityId() throws SAMLException {
        String issuerName = null;
        Issuer issuer = null;
        if (!this.response.getAssertions().isEmpty()) {
            issuer = this.response.getAssertions().get(0).getIssuer();
        }
        if (issuer == null) {
            issuer = this.response.getIssuer();
        }

        if (issuer != null)
            issuerName = issuer.getValue();


        if (issuerName != null)
            return issuerName;

        throw new SAMLException("SAML Response does not contain a issuer, this is required for unsolicited Responses");

    }

    public boolean isDestinationOK(String destination) {
        if (this.response.getDestination() == null)
            return true;

        if (Constants.validationLevel == ValidationLevel.Loose)
            return true;

        return this.response.getDestination() != null && this.response.getDestination().equals(destination);
    }

    public boolean isPassive() {
        if (this.response.getStatus() == null)
            return false;
        if (this.response.getStatus().getStatusCode() == null)
            return false;
        if (this.response.getStatus().getStatusCode().getStatusCode() == null)
            return false;
        return StatusCode.NO_PASSIVE.equals(this.response.getStatus().getStatusCode().getStatusCode().getValue());
    }

    /**
     * Get the response assertion.
     *
     * @param credential
     * @throws SAMLException
     */
    public MxSAMLAssertion getAssertion(Credential credential) throws SAMLException {
        // return the
        if (this.assertion != null) {
            return this.assertion;
        }

        if (credential != null) {
            MxSAMLAssertion assertionResult = MxSAMLEncryptedAssertion.decryptAssertion(this.response, credential, true);
            if(assertionResult != null) {
                return assertionResult;
            }
        }

        return MxSAMLAssertion.fromResponse(this.response);
    }

    public Response getResponse() {
        return this.response;
    }

    private  ValidationLevel getDestinationValidationLevel(){
        String level = Constants.validationLevel+"";
        try {
            return  ValidationLevel.valueOf(level);
        }catch (IllegalArgumentException ex){
            _logNode.warn("Unsupported DestinationValidationLevel: [" +level + "] was configured, only " + ValidationLevel.values() + " are supported.");
        }
        return null;
    }
}
