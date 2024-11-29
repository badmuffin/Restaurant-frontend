import { useCallback } from "react";
import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/ApiResponse";
// import Cookies from "js-cookie";
import { useAuth0 } from "@auth0/auth0-react";


const useReviewApi = () => {
  const { get } = useHttpMethodContext();
  const { getAccessTokenSilently } = useAuth0();


  const fetchReview = useCallback(async (): Promise<ApiResponseData> => {
    // const token = localStorage.getItem("token");
    // const token = Cookies.get("token");
    const token = await getAccessTokenSilently();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await get('/api/review', true, headers);
    return response;
  }, [get, getAccessTokenSilently])

  return { fetchReview };
}

export default useReviewApi;