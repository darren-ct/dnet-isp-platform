import { InternetServiceEntity } from ".";
import { api } from "../../lib";

export class InternetServicesApi {
  async findInternetPackages() {
    const data = await api.get<InternetServiceEntity[]>("/internet_packages");
    return data.data;
  }
}
