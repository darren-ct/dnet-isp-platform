import { InternetServiceEntity } from ".";
import { api } from "../../lib";
import { BaseResponse } from "../shared";

export class InternetServicesApi {
  // private baseUrl = "/internet-packages";

  async findInternetPackages() {
    const data =
      await api.get<BaseResponse<InternetServiceEntity[]>>(
        "/internet-packages"
      );

    return data.data;
  }
}
