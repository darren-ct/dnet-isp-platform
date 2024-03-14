import { useMutation } from "@tanstack/react-query";
import { AuthServicesApi } from "../api";
import { AuthEntity, LoginDto } from "..";

import Cookies from "js-cookie";

export function useLogin() {
  const api = new AuthServicesApi();

  return useMutation<AuthEntity, Error, LoginDto>({
    mutationFn: api.login,
    onSuccess: (data) => {
      Cookies.set("token", data.access_token);
    },
  });
}
