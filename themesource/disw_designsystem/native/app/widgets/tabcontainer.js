import { Platform } from "react-native";
import { apolloColors, spacing } from "../custom-variables";
import { TabContainer as Original } from "../../../../atlas_core/native/core/widgets/tabcontainer";
import mergeobjects from "../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
export const TabContainer = mergeobjects(Original, {
  tabBar: {
    backgroundColor: "transparent",
    paddingVertical: 0,
  },
  tab: {
    paddingVertical: spacing.smallest,
  },
  indicator: {
    backgroundColor: apolloColors.ORANGE,
    height: Platform.select({ ios: 2, android: 2 }),
  },
  label: {
    color: apolloColors.DARK_GREY_FONT,
    textAlign: "left",
    textTransform: "capitalize",
    alignSelf: "flex-start",
  },
  activeLabel: {
    color: apolloColors.ORANGE,
  },
});
