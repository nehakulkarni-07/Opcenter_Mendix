import { callToAction, listView } from "../../custom-variables";
/**
 * Blocks
 */
export const blockCallToActionOuter = {};
export const blockCallToActionInner = {
    container: {
        backgroundColor: "transparent",
        width: "100%",
        paddingVertical: callToAction.callToActionCornerSize
    }
};
export const blockCallToActionCorner = {
    container: {
        width: callToAction.callToActionCornerSize,
        height: callToAction.callToActionCornerSize,
        position: "absolute",
        backgroundColor: "transparent"
    }
};
export const blockCallToActionCornerTopLeft = {
    container: {
        top: 0,
        left: 0,
        borderTopColor: callToAction.borderColor,
        borderLeftColor: callToAction.borderColor,
        borderTopWidth: callToAction.borderWidth,
        borderLeftWidth: callToAction.borderWidth
    }
};
export const blockCallToActionCornerTopRight = {
    container: {
        top: 0,
        right: 0,
        borderTopColor: callToAction.borderColor,
        borderRightColor: callToAction.borderColor,
        borderTopWidth: callToAction.borderWidth,
        borderRightWidth: callToAction.borderWidth
    }
};
export const blockCallToActionCornerBottomLeft = {
    container: {
        bottom: 0,
        left: 0,
        borderBottomColor: callToAction.borderColor,
        borderLeftColor: callToAction.borderColor,
        borderBottomWidth: callToAction.borderWidth,
        borderLeftWidth: callToAction.borderWidth
    }
};
export const blockCallToActionCornerBottomRight = {
    container: {
        bottom: 0,
        right: 0,
        borderBottomColor: callToAction.borderColor,
        borderRightColor: callToAction.borderColor,
        borderBottomWidth: callToAction.borderWidth,
        borderRightWidth: callToAction.borderWidth
    }
};
export const blockBottomBorder = {
    container: {
        borderColor: listView.border.color,
        borderBottomWidth: listView.border.width,
    }
};
