import { apolloColors } from "../custom-variables";
import { blueDarkBackground } from "../helpers/colors";
import {
  deviceWidthPercent,
  deviceHeightPercent,
} from "../helpers/_functions/sizes";
const factor = 40;
export const introScreen = {
  ...blueDarkBackground,
};
export const logoContainer = {
  container: {},
};
export const logoImage = {
  image: {
    fill: apolloColors.WHITE,
    width: deviceWidthPercent(factor),
    height: deviceHeightPercent(factor),
  },
};
