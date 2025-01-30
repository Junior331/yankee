import { Dispatch } from "react";

export interface ISelect {
  options: string[],
  selectedOption: string | null;
  setSelectedOption: Dispatch<React.SetStateAction<string | null>>;
}
