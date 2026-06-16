import { apolloColors } from "../custom-variables";
// This should be removed?
export const navigationStyle = {
    bottomBar: {
        container: {
            // ViewStyle properties
            paddingTop: 10,
            backgroundColor: apolloColors.GREY_2,
            height: 72,
        },
        text: {
            // TextStyle properties
            color: apolloColors.DARK_GREY_FONT,
            selectedColor: apolloColors.BLUE_DARK,
            fontSize: 16,
        },
        icon: {
            size: 32,
        },
        selectedIcon: {
            // All TextStyle properties are allowed
            color: apolloColors.BLUE_DARK,
        },
    },
};
