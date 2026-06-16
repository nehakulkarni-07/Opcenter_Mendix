import { apolloColors, font } from "../custom-variables";
export const Layout = {
  sidebar: {
    // All ViewStyle properties are allowed
  },
  statusBar: {
    // Only backgroundColor and barStyle are allowed
    backgroundColor: apolloColors.BLUE_DARK,
    barStyle: "light-content",
  },
  header: {
    container: {
      // All ViewStyle properties are allowed
      backgroundColor: apolloColors.BLUE_DARK,
      borderBottomWidth: undefined,
    },
    title: {
      // All TextStyle properties are allowed
      // color: navigation.topBar.titleColor,
      // fontSize: navigation.topBar.titleFontSize,
      // fontFamily: font.family,
      // fontWeight: font.weightBold,
      display: "none",
      width: 0,
    },
    backButtonText: {
      // All TextStyle properties are allowed
      color: apolloColors.WHITE,
      fontFamily: font.family,
    },
    backButtonIcon: {
      // All ImageStyle properties are allowed
      tintColor: apolloColors.WHITE,
    },
  },
  container: {
    // All ViewStyle properties are allowed
    // backgroundColor: background.primary,
  },
};
//
export const Page = Layout;
