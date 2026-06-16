import { textSize } from "./_functions/sizes";
import adjustfont from "../../../../atlas_core/native/core/helpers/_functions/adjustfont";
import { apolloColors, font } from "../custom-variables";
import { createTextType } from "./_functions/typography";
import { setTextColor } from "./_functions/objects";
export const textTypeHeader = textSize(adjustfont(54));
export const textTypeSubHeader = textSize(adjustfont(32));
export const textDark = {
  text: {
    color: apolloColors.DARK_GREY_FONT,
  },
};
export const textBlockSpacingHor = 7;
export const textBlockSpacingVer = 4;
export const textBlockContainerSubtitleTop = {
  ...createTextType(14),
  container: {
    position: "absolute",
    top: textBlockSpacingVer,
    left: textBlockSpacingHor,
    right: textBlockSpacingHor,
  },
};
export const textBlockContainerSubtitleBottom = {
  ...createTextType(14),
  container: {
    position: "absolute",
    bottom: textBlockSpacingVer,
    left: textBlockSpacingHor,
    right: textBlockSpacingHor,
  },
};
export const textBlockContainerTitle = {
  container: {
    marginBottom: 0 - adjustfont(25),
  },
  text: {
    fontWeight: font.weightNormal,
    fontSize: adjustfont(75),
    fontFamily: font.family,
    lineHeight: adjustfont(80),
  },
};
export const textColorGrey = setTextColor(apolloColors.GREY_4);
export const textColorBlue = setTextColor(apolloColors.BLUE_DARK);
export const textColorGreen = setTextColor(apolloColors.GREEN);
export const textColorRed = setTextColor(apolloColors.RED);
