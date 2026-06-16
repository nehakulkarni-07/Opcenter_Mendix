import {
  DropDown as DropDownOriginal,
  DropDownVertical as DropDownVerticalOriginal,
} from "../../../../atlas_core/native/core/widgets/dropdown";
import mergeobjects from "../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
import { apolloColors, border, spacing } from "../custom-variables";
import adjustFont from "../../../../atlas_core/native/core/helpers/_functions/adjustfont";
import { Platform } from "react-native";
const generalAdjustMents = {
  iconStyle: {
    color: apolloColors.GREY_BORDER,
  },
  value: {
    backgroundColor: apolloColors.WHITE,
    borderColor: apolloColors.GREY_BORDER,
    borderWidth: border.width,
    borderRadius: border.radius,
    fontSize: adjustFont(16),
    color: apolloColors.GREY_BORDER,
    ...Platform.select({
      ios: {
        paddingVertical: spacing.regular,
        paddingHorizontal: spacing.regular,
      },
      android: {
        paddingVertical: spacing.regular,
        paddingHorizontal: spacing.small,
      },
    }),
  },
};
export const DropDown = mergeobjects(DropDownOriginal, generalAdjustMents);
export const DropDownVertical = mergeobjects(
  DropDownVerticalOriginal,
  generalAdjustMents
);
