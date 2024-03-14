import { AuthEntity, LoginDto, RegisterDto, UserEntity } from ".";
import { api, authApi } from "../../lib";

export class AuthServicesApi {
  async register(dto: RegisterDto) {
    const data = await authApi.post<AuthEntity>("/signup", dto);
    return data.data;
  }

  async login(dto: LoginDto) {
    const data = await authApi.post<AuthEntity>(
      "/token?grant_type=password",
      dto
    );
    return data.data;
  }

  async getUser() {
    const data = await api.get<UserEntity>("/user");
    return data.data;
  }

  async logout() {
    const data = await authApi.post<object>("/logout");
    return data.data;
  }
}
