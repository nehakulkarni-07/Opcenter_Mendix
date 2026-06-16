import {
  apolloColors,
  spacing,
  headerImageSize,
  callToAction,
} from "../custom-variables";
import { Platform } from "react-native";
import adjustfont from "../../../../atlas_core/native/core/helpers/_functions/adjustfont";
import { createTransparentButton } from "./_functions/buttons";
export const btnBlueButton = {
  container: {
    width: "100%",
    // Ripplecolor and all ViewStyle properties are allowed
    // borderWidth: 1,
    // borderStyle: "solid",
    // rippleColor: contrast.lowest,
    borderColor: apolloColors.WHITE,
    backgroundColor: apolloColors.BLUE_DARK,
    // alignItems: "center",
    // justifyContent: "center",
    // borderRadius: button.borderRadius,
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
  icon: {
    // Size, Color and all ViewStyle properties are allowed
    // color: button.primary.color,
    // size: font.sizeSmall,
  },
  caption: {
    // All TextStyle properties are allowed
    color: apolloColors.WHITE,
    fontSize: adjustfont(18),
  },
};
export const btnDiswTransparentNormal = createTransparentButton(
  apolloColors.DARK_GREY_FONT
);
export const btnDiswTransparentActive = createTransparentButton(
  apolloColors.BLUE_DARK,
  {
    container: {
      backgroundColor: apolloColors.BLUE_LIGHT_2,
    },
  }
);
export const btnDiswTransparentNormalInverse = createTransparentButton(
  apolloColors.WHITE,
  {
    container: {
      borderRadius: 0,
    },
  }
);
export const btnDiswTransparentActiveInverse = createTransparentButton(
  apolloColors.WHITE,
  {
    container: {
      backgroundColor: apolloColors.BLUE_DARKER,
    },
  }
);
export const btnFilterButtonNormal = btnDiswTransparentNormal;
export const btnFilterButtonActive = createTransparentButton(
  apolloColors.ORANGE
);
export const btnTransparent = createTransparentButton(apolloColors.WHITE, {
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    size: adjustfont(headerImageSize),
  },
});
export const btnDiswBlockContainerTitle = createTransparentButton(
  apolloColors.WHITE,
  {
    container: {
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
    icon: {
      size: adjustfont(60),
    },
  }
);
export const btnLargeCallToAction = createTransparentButton(
  apolloColors.BLUE_DARK,
  {
    container: {
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginHorizontal: 0,
      marginVertical: 0,
    },
    icon: {
      size: callToAction.maxCallToActionSize,
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginHorizontal: 0,
      marginVertical: 0,
    },
  }
);
export const backButton = createTransparentButton(apolloColors.WHITE, {
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    size: adjustfont(headerImageSize - 1),
  },
});
