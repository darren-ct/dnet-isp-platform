import { MyTransactionEntity } from ".";
import { api } from "../../lib";

export class MyTransactionsApi {
  async findMyTransactions(params?: string) {
    const data = await api.get<MyTransactionEntity[]>(
      `/my_transactions?${params}`
    );
    return data.data;
  }

  async createTransaction(dto: Partial<MyTransactionEntity>) {
    const data = await api.post<MyTransactionEntity>("/my_transactions", dto);
    return data.data;
  }
}
