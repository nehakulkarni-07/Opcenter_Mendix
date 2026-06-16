import { font } from "../../custom-variables";
export const createTextType = (size) => ({
  container: {},
  text: {
    fontWeight: font.weightSemiBold,
    fontSize: size,
    fontFamily: font.family,
    lineHeight: size + 2,
  },
});
