import { font } from "../custom-variables";
import { createTextType } from "../helpers/_functions/typography";
/*

DISCLAIMER:
Do not change this file because it is core styling.
Customizing core files will make updating Atlas much more difficult in the future.
To customize any core styling, copy the part you want to customize to styles/native/app/ so the core styling is overwritten.

==========================================================================
    Text

    Default Class For Mendix Text Widget
========================================================================== */
export const Text = {
  container: {
    // All ViewStyle properties are allowed
  },
  text: {
    // numberOfLines & All TextStyle properties are allowed
    color: font.color,
    fontSize: font.size,
    fontFamily: font.family,
    lineHeight: font.size + 2,
  },
};
export const TextHeading1 = createTextType(font.sizeH1);
export const TextHeading2 = createTextType(font.sizeH2);
export const TextHeading3 = createTextType(font.sizeH3);
export const TextHeading4 = createTextType(font.sizeH4);
export const TextHeading5 = createTextType(font.sizeH5);
export const TextHeading6 = createTextType(font.sizeH6);
