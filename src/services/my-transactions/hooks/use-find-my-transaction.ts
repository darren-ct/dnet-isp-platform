import { useQuery } from "@tanstack/react-query";
import { MyTransactionEntity, MyTransactionsServicesQueryKeyFactory } from "..";
import { MyTransactionsApi } from "../api";

export function useFindMyTransaction(userId: string) {
  const api = new MyTransactionsApi();
  const queryKeyFactory = new MyTransactionsServicesQueryKeyFactory();

  return useQuery<MyTransactionEntity[], Error>({
    queryKey: queryKeyFactory.lists(),
    queryFn: () => api.findMyTransactions(`user_id=eq.${userId}`),
    initialData: [],
    enabled: !!userId,
  });
}
