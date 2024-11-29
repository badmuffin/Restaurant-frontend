import { useCallback } from "react";
import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { LoginResponse } from "../../types/LoginResponse";

const useLoginApi = () => {
  const { post } = useHttpMethodContext();

  const loginUser = useCallback( async (email: string, password: string): Promise<LoginResponse> => {
    const response = await post('/user/login', { email, password }, true);
    return response as LoginResponse;
  }, [post])
  return { loginUser };
}

export default useLoginApi;

// Not used file, Reason - Auth0
