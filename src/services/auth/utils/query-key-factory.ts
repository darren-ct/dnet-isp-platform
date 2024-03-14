import { QueryKeyFactory } from "../../../services/shared/query-key-factory";

export class UserServicesQueryKeyFactory extends QueryKeyFactory {
  constructor() {
    super("users");
  }
}
