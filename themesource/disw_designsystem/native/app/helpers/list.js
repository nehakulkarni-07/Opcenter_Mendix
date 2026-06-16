import { apolloColors } from "../custom-variables";
const createListIndicator = (color) => ({
  container: {
    width: 5,
    height: "100%",
    backgroundColor: color,
  },
});
export const listIndactorGrey = createListIndicator(apolloColors.GREY_4);
export const listIndactorGreen = createListIndicator(apolloColors.GREEN);
export const listIndactorRed = createListIndicator(apolloColors.RED);
