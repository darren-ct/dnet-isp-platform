import { useMutation } from "@tanstack/react-query";
import { AuthServicesApi } from "../api";

export function useLogout() {
  const api = new AuthServicesApi();

  return useMutation<object, Error>({
    mutationFn: api.logout,
  });
}
