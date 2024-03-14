export interface UserEntity {
  id: string;
  email: string;
  user_metadata: { fullName: string; phoneNumber: string };
}

export interface AuthEntity {
  access_token: string;
  refresh_token: string;
  user: UserEntity;
}
