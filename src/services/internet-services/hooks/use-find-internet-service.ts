import { useQuery } from "@tanstack/react-query";
import { InternetServiceEntity, InternetServicesQueryKeyFactory } from "..";
import { InternetServicesApi } from "../api";

export function useFindInternetService() {
  const api = new InternetServicesApi();
  const queryKeyFactory = new InternetServicesQueryKeyFactory();
  console.log({ queryKeyFactory });

  return useQuery<InternetServiceEntity[], Error>({
    queryKey: queryKeyFactory.lists(),
    queryFn: api.findInternetPackages,
    initialData: [],
  });
}
