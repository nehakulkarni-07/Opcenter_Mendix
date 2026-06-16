import adjustfont from "../../../../../atlas_core/native/core/helpers/_functions/adjustfont";
import mergeobjects from "../../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
export const createTransparentButton = (
  color,
  extraProps = {},
  buttonSize = 22
) => {
  return mergeobjects(
    {
      container: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
      },
      icon: {
        // Size, Color and all ViewStyle properties are allowed
        color,
        size: adjustfont(buttonSize),
      },
    },
    extraProps
  );
};
