import { Dispatch } from "react";

export interface IDatetimepicker {
  selectedDate: string | null;
  setSelectedDate: Dispatch<React.SetStateAction<string | null>>;
}
