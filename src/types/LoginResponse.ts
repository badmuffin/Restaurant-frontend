export interface LoginResponse {
  success: boolean;
  errorMsg: string;
  response: {
    token: string;
    message: string;
    user: {
      email: string;
      id: string;
      name: string;
    };
  };
}