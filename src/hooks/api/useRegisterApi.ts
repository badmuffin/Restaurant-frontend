import { useCallback } from "react";
import { useHttpMethodContext } from "../../context/HttpMethodProvider"
import { ApiResponseData } from "../../types/ApiResponse";

const useRegisterApi = () => {
  const { post } = useHttpMethodContext();

  const registerUser = useCallback(async (name: string, email: string, password: string): Promise<ApiResponseData> => {
    const response = await post('/user/signup', { name, email, password }, true);
    return response;
  }, [post])
  return { registerUser }
}

export default useRegisterApi;
