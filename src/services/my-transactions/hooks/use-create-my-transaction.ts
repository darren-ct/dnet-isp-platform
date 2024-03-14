import { useMutation } from "@tanstack/react-query";
import { MyTransactionEntity } from "..";
import { MyTransactionsApi } from "../api";

export function useCreateMyTransaction() {
  const api = new MyTransactionsApi();

  return useMutation<MyTransactionEntity, Error, Partial<MyTransactionEntity>>({
    mutationFn: api.createTransaction,
  });
}
