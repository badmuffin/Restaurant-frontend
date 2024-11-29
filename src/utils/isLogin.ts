import Cookies from "js-cookie";
const isLoggedIn = (): boolean => (Cookies.get("token")) ? true : false;

// const isLoggedIn = (): boolean => (localStorage.getItem("token")) ? true : false;

export default isLoggedIn;