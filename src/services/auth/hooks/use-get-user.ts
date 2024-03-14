import { useQuery } from "@tanstack/react-query";
import { UserServicesQueryKeyFactory, UserEntity } from "..";
import { AuthServicesApi } from "../api";

export function useGetUser() {
  const api = new AuthServicesApi();
  const queryKeyFactory = new UserServicesQueryKeyFactory();

  return useQuery<UserEntity, Error>({
    queryKey: queryKeyFactory.all(),
    queryFn: api.getUser,
  });
}
