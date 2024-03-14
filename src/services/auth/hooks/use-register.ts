import { useMutation } from "@tanstack/react-query";
import { AuthServicesApi } from "../api";
import { RegisterDto, AuthEntity } from "..";

import Cookies from "js-cookie";

export function useRegister() {
  const api = new AuthServicesApi();

  return useMutation<AuthEntity, Error, RegisterDto>({
    mutationFn: api.register,
    onSuccess: (data) => {
      Cookies.set("token", data.access_token);
    },
  });
}
