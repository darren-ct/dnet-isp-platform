import { useQuery } from "@tanstack/react-query";
import { MyTransactionEntity, MyTransactionsServicesQueryKeyFactory } from "..";
import { MyTransactionsApi } from "../api";

export function useFindMyTransaction() {
  const api = new MyTransactionsApi();
  const queryKeyFactory = new MyTransactionsServicesQueryKeyFactory();

  return useQuery<MyTransactionEntity[], Error>({
    queryKey: queryKeyFactory.lists(),
    queryFn: api.findMyTransactions,
    initialData: [],
  });
}
