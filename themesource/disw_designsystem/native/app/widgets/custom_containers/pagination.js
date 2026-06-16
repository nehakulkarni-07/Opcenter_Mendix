import { apolloColors, font, pagination } from "../../custom-variables";
import adjustFont from "../../../../../atlas_core/native/core/helpers/_functions/adjustfont";
import { createTransparentButton } from "../../helpers/_functions/buttons";
/**
 * Pagination (used for manual pagination block)
 */
const bulletSize = pagination.bulletSize;
const bulletSizeHalf = bulletSize / 2;
export const paginationBottomBar = {
  container: {
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
};
export const paginationPrevious = {};
export const paginationNext = {};
export const paginationButton = createTransparentButton(
  apolloColors.BLUE_DARK,
  {
    container: {
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  },
  18
);
export const paginationText = {
  container: {
    paddingTop: pagination.textPaddingTop,
  },
  text: {
    color: apolloColors.BLUE_DARK,
    fontSize: adjustFont(pagination.fontSize),
    fontFamily: font.family,
    lineHeight: adjustFont(pagination.fontSize) + 2,
    fontWeight: font.weightBold,
  },
};
export const paginationBulletsContainer = {};
export const paginationBullet = {
  container: {
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSizeHalf,
    marginLeft: bulletSizeHalf,
    marginRight: bulletSizeHalf,
  },
};
export const paginationBulletNormal = {
  container: {
    borderColor: apolloColors.GREY_BORDER,
    borderWidth: pagination.borderSize,
  },
};
export const paginationBulletActive = {
  container: {
    backgroundColor: apolloColors.BLUE_DARK,
  },
};
export const paginationBulletDone = {
  container: {
    opacity: 0.6,
    backgroundColor: apolloColors.BLUE_DARK,
  },
};
