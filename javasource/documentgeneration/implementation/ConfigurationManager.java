package documentgeneration.implementation;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.Optional;

import org.apache.commons.lang3.SystemUtils;
import org.apache.commons.lang3.time.DateUtils;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.logging.ILogNode;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import documentgeneration.proxies.Configuration;
import documentgeneration.proxies.constants.Constants;

public class ConfigurationManager {
	enum UseLocalService {
		UNDETERMINED,
		TRUE,
		FALSE
	}
	
	public static boolean useLocalService() {
		if (useLocalService.equals(UseLocalService.UNDETERMINED)) {
			String overrideServiceType = Constants.getOverrideServiceType();

			if (overrideServiceType != null && overrideServiceType.length() > 0) {
				switch (overrideServiceType.toLowerCase()) {
				case "local":
					logging.debug("Overriding service type: local service");
					useLocalService = UseLocalService.TRUE;
					break;

				case "cloud":
					logging.debug("Overriding service type: cloud service");
					useLocalService = UseLocalService.FALSE;
					break;

				default:
					String message = "Unsupported value for OverrideServiceType constant: " + overrideServiceType;
					logging.error(message);
					throw new RuntimeException(message);
				}
			} else {
				if (SystemUtils.IS_OS_WINDOWS || SystemUtils.IS_OS_MAC_OSX) {
					logging.debug("Setting service type to local service based on OS: " + SystemUtils.OS_NAME);
					useLocalService = UseLocalService.TRUE;
				} else {
					logging.debug("Setting service type to cloud service based on OS: " + SystemUtils.OS_NAME);
					useLocalService = UseLocalService.FALSE;
				}
			}
		}	

		return useLocalService.equals(UseLocalService.TRUE);
	}

	public static Configuration getConfigurationObject(IContext context) {
		String query = String.format("//%s", Configuration.entityName);
		Optional<IMendixObject> maybeConfiguration = Core.createXPathQuery(query).execute(Core.createSystemContext())
				.stream().findAny();

		if (maybeConfiguration.isEmpty())
			throw new RuntimeException(
					"No configuration object available. For use in Mendix cloud, your app environment needs to be registered first. Please reference the documentation for details.");

		return Configuration.initialize(context, maybeConfiguration.get());
	}

	public static void updateTokenInformation(Configuration configuration, String accessToken, String refreshToken,
			int expiresIn) throws CoreException {
		configuration.setAccessToken(accessToken);
		configuration.setRefreshToken(refreshToken);
		configuration.setAccessTokenExpirationDate(DateUtils.addSeconds(new Date(), expiresIn));
	}

	public static URI getTokenEndpoint() {
		try {
			return new URI(TOKEN_URL);
		} catch (URISyntaxException e) {
			throw new RuntimeException("Invalid token endpoint: " + e.getMessage());
		}
	}

	public static URI getGenerateEndpoint() {
		try {
			return new URI(GENERATE_URL);
		} catch (URISyntaxException e) {
			throw new RuntimeException("Invalid generate endpoint: " + e.getMessage());
		}
	}

	public static final String MODULE_VERSION = "1.7.0";
	public static final String TOKEN_URL = documentgeneration.proxies.constants.Constants.getCloudEndpoint()
			+ "/auth/v2/token";
	public static final String GENERATE_URL = documentgeneration.proxies.constants.Constants.getCloudEndpoint()
			+ "/v1/generate-document";
	public static final String GENERATE_PATH = DocGenRequestHandler.ENDPOINT + DocGenRequestHandler.GENERATE_PATH;
	public static final String RESULT_PATH = DocGenRequestHandler.ENDPOINT + DocGenRequestHandler.RESULT_PATH;
	public static final String VERIFY_PATH = DocGenRequestHandler.ENDPOINT + DocGenRequestHandler.VERIFY_PATH;

	private static final ILogNode logging = Logging.logNode;
	private static UseLocalService useLocalService = UseLocalService.UNDETERMINED;
}
