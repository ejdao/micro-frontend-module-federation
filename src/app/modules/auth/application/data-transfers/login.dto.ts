export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: string;
  message: string;
  success: boolean;
}
