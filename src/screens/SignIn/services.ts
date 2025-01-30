import { AxiosError } from "axios";
import { SignInProps } from "./@types";
import { httpRequest } from "@/utils/types";
import { ENDPOINTS } from "@/utils/endpoints";

export const signIn = async ({ data, request, setLoading }: SignInProps) => {
  setLoading(true);
  const url = `${ENDPOINTS.USER.SIGN.IN}`;

  const requestConfig: httpRequest = {
    url,
    method: "post",
    headers: {},
    body: data,
  };
  try {
    await request(requestConfig);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    const errorMessage =
      _error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  } finally {
    setLoading(false);
  }
};
