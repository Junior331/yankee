import { Dispatch, SetStateAction } from "react";

import { httpRequest } from "@/utils/types";
import { httpClientResponse } from "@/utils/types";

export type DataProps = {
  email: string;
  gender: string;
  username: string;
  fullname: string;
  password: string;
  dayOfBirth: string;
  phoneNumber: string;
};

export type FormValues = DataProps & {
  confirmPassword: string;
};

export type SignUpProps = {
  data: DataProps;
  setLoading: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<DataProps>>;
};

export enum PAGES {
  ONE = 0,
  TWO = 1,
  THREE = 2,
  FOUR = 3,
  FIVE = 4,
  SIX = 5,
}