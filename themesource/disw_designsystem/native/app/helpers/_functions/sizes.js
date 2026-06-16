import { Dimensions } from "react-native";
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");
const percentageOf = (num, factor = 100) => {
    if (factor < 1 || factor > 100) {
        return num;
    }
    return (num / 100) * factor;
};
/**
 * Returns a percentage of device width
 * @param {number} factor Should be a number between 1 and 100
 */
export const deviceWidthPercent = (factor = 100) => {
    return percentageOf(deviceWidth, factor);
};
/**
 * Returns a percentage of device height
 * @param {number} factor Should be a number between 1 and 100
 */
export const deviceHeightPercent = (factor = 100) => {
    return percentageOf(deviceHeight, factor);
};
/**
 * Return a container style with a certain flex factor
 * @param {number} flex Flex factor that determines the size in relation to it's siblings
 */
export const flexFactor = (flex = 1) => ({
    container: {
        flex,
    },
});
export const textSize = (fontSize) => ({
    text: {
        fontSize,
        lineHeight: fontSize,
    },
});
