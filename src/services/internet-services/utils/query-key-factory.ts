import { QueryKeyFactory } from "../../../services/shared/query-key-factory";

export class InternetServicesQueryKeyFactory extends QueryKeyFactory {
  constructor() {
    super("/internet-packages");
  }
}
