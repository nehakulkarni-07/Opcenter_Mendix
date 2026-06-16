import {
  TextBox as TextBoxOriginal,
  TextBoxVertical as TextBoxVerticalOriginal,
} from "../../../../atlas_core/native/core/widgets/textbox";
import mergeobjects from "../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
import { apolloColors, spacing } from "../custom-variables";
import { Platform } from "react-native";
import adjustFont from ".../../../../atlas_core/native/core/helpers/_functions/adjustfont";
export const apolloInputBoxAdjustMents = {
  borderColor: apolloColors.GREY_BORDER,
  fontSize: adjustFont(16),
  color: apolloColors.GREY_BORDER,
  ...Platform.select({
    ios: {
      paddingVertical: spacing.regular,
      paddingHorizontal: spacing.regular,
    },
    android: {
      paddingVertical: spacing.small,
      paddingHorizontal: spacing.small,
    },
  }),
};
const generalAdjustMents = {
  container: {},
  input: {
    ...apolloInputBoxAdjustMents,
  },
};
export const TextBox = mergeobjects(TextBoxOriginal, generalAdjustMents);
export const TextBoxVertical = mergeobjects(
  TextBoxVerticalOriginal,
  generalAdjustMents
);
