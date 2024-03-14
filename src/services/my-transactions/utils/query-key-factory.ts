import { QueryKeyFactory } from "../../../services/shared/query-key-factory";

export class MyTransactionsServicesQueryKeyFactory extends QueryKeyFactory {
  constructor() {
    super("my-transactions");
  }
}
