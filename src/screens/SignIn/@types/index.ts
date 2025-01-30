import { Dispatch, SetStateAction } from "react";

import { httpRequest } from "@/utils/types";
import { httpClientResponse } from "@/utils/types";

export type DataProps = {
  email: string;
  password: string;
};

export type SignInProps = {
  data: DataProps;
  setLoading: Dispatch<SetStateAction<boolean>>;
  request: (data: httpRequest) => Promise<httpClientResponse<DataProps>>;
};
