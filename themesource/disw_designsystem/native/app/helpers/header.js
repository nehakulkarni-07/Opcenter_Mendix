import { apolloColors, headerHeight, headerImageSize } from "../custom-variables";
export const headerAvatar = {
    image: {
        height: headerImageSize,
        width: headerImageSize,
        borderRadius: headerImageSize / 2,
    }
};
export const headerBlockLeft = {};
export const headerBlockCenter = {};
export const headerBlockRight = {};
export const headerLogo = {
    image: {
        fill: apolloColors.WHITE,
        height: headerImageSize,
        width: headerImageSize,
    }
};
export const headerBlock = {
    container: {
        minHeight: headerHeight
    }
};
