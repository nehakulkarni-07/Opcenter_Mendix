import {
  DatePicker as DatePickerOriginal,
  DatePickerVertical as DatePickerVerticalOriginal,
} from "../../../../atlas_core/native/core/widgets/datepicker";
import mergeobjects from "../../../../atlas_core/native/core/helpers/_functions/mergeobjects";
import { apolloInputBoxAdjustMents } from "./textbox";
const adjustMents = {
  value: {
    ...apolloInputBoxAdjustMents,
  },
};
export const DatePicker = mergeobjects(DatePickerOriginal, adjustMents);
export const DatePickerVertical = mergeobjects(
  DatePickerVerticalOriginal,
  adjustMents
);
