import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/ApiResponse";
import { useCallback } from "react";

const useEmailApi = () => {
  const { post } = useHttpMethodContext();

  const sentEmail = useCallback( async (email: string): Promise<ApiResponseData> => {
    const response = await post('/api/newsletter', { email});
    return response;
  }, [post])
  return { sentEmail}
}

export default useEmailApi;