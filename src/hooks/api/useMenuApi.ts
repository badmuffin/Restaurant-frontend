import { useCallback } from "react";
import { useHttpMethodContext } from "../../context/HttpMethodProvider";
import { ApiResponseData } from "../../types/ApiResponse";
// import Cookies from "js-cookie";

import { useAuth0 } from "@auth0/auth0-react";

const useMenuApi = () => {
  const { get } = useHttpMethodContext();
  const { getAccessTokenSilently } = useAuth0();

  const fetchMenu = useCallback( async (): Promise<ApiResponseData> => {
    // const token = localStorage.getItem("token");
    // const token = Cookies.get("token");

    const token = await getAccessTokenSilently();
    const headers = token ? {Authorization: `Bearer ${token}`}: {};

    const response = await get('/api/menu', true, headers);
    return response;
  }, [ getAccessTokenSilently, get])

  return { fetchMenu }
}

export default useMenuApi;