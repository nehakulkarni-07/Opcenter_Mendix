import { deviceWidthPercent } from "../../helpers/_functions/sizes";
import { headerHeight } from "../../custom-variables";
import { deviceHeight } from "../../../../../atlas_core/native/variables";
/**
 * Blocks
 */
const heightContainer = deviceHeight - headerHeight * 2;
const maxHeightRow = heightContainer / 3;
const maxSize =
  deviceWidthPercent(50) < maxHeightRow ? deviceWidthPercent(50) : maxHeightRow;
const maxWideSize =
  deviceWidthPercent(100) < maxSize * 2 ? deviceWidthPercent(100) : maxSize * 2;
export const blockHomeBlockContainer = {
  container: {
    width: maxSize,
    height: maxSize,
  },
};
export const blockHomeBlockContainerInner = {
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
};
export const blockHomeBlockContainerWide = {
  container: {
    width: maxWideSize,
    height: maxSize,
  },
};
