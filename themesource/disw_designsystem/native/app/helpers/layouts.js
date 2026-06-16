import { apolloColors, headerHeight } from "../custom-variables";
import { deviceHeight } from "../../../../atlas_core/native/variables";
import mergeobjects from "../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
export const diswHeader = {
  container: {
    flex: -1,
    width: "100%",
    height: headerHeight,
    backgroundColor: apolloColors.BLUE_DARK,
  },
};
export const diswContent = {
  container: {
    flex: 1,
    backgroundColor: apolloColors.GREY_2,
  },
};
export const diswFooter = {
  container: {
    flex: -1,
    width: "100%",
    minHeight: headerHeight,
    maxHeight: deviceHeight - headerHeight,
    bottom: 0,
    position: "absolute",
  },
};
export const diswFooterRow = {
  container: {
    flex: -1,
    width: "100%",
    height: headerHeight,
    backgroundColor: apolloColors.GREY_2,
  },
};
export const diswFooterRowInverse = mergeobjects(diswFooterRow, {
  container: {
    flex: -1,
    width: "100%",
    height: headerHeight,
    backgroundColor: apolloColors.BLUE_DARK,
  },
});
export const diswFooterContainer = {
  container: {
    backgroundColor: apolloColors.GREY_2,
  },
};
export const diswFooterContainerInverse = mergeobjects(diswFooterContainer, {
  container: {
    backgroundColor: apolloColors.BLUE_DARK,
  },
});
