// import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import profile from "../assets/image/profile1.png";

// ------- NO AUTH0 ------
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import isLoggedIn from "../utils/isLogin";
// ------- NO AUTH0 ------

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navlinks = [
    { title: "Menu", link: "/" },
    { title: "Events", link: "/" },
    { title: "Gallery", link: "/" },
    { title: "About", link: "/" },
    { title: "Contact", link: "/" },
  ];

  const [userData, setUserData] = useState<any>(null); // any have to be removed

  // -------- NO AUTH0 ------------
  // const navigate = useNavigate();
  // const logout = () => {
  //   Cookies.remove("token");
  //   navigate("/login");
  //   alert("User Logged out"); // for testing
  // };
  // -------- NO AUTH0 -------------

  // const isLogged = isLoggedIn(); // No Auth0
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  // console.log(user);
  useEffect(() => {
    if(user) setUserData(user);
  }, [user]);

  return (
    <nav className="z-20 flex flex-col md:flex-row justify-between items-center px-10 lg:px-32 xl:px-40 py-8 min-w-full">
      {/* logo */}
      <div className="hover:cursor-pointer">
        <img src={logo} width={160} alt="logo" />
      </div>
      {/* navlinks */}
      <div className="flex justify-center text-base">
        {navlinks.map((navlink, idx) => (
          <li
            key={idx}
            className="flex px-4 hover:cursor-pointer hover:text-[#EA6D27] duration-150"
          >
            {navlink.title}
          </li>
        ))}
      </div>
      {/* --------- NO AUTH0 ------ */}
      {/* <div>
        {isLogged ? (
          <button
            onClick={logout}
            className="bg-[#EA6D27] px-6 py-2 border rounded-tl-xl rounded-br-xl text-white text-lg"
          >
            Logout
          </button>
        ) : (
          <button className="bg-[#EA6D27] px-6 py-2 border rounded-tl-xl rounded-br-xl text-white text-lg">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div> */}
      {/* --------- NO AUTH0 ------ */}

      <div className="flex gap-4 justify-center items-center">
        {isAuthenticated ? (
          <div className="flex gap-2 justify-center items-center">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-[#101A24] px-6 py-2 border rounded-tl-xl rounded-br-xl text-white text-lg"
            >
              Logout
            </button>
            <div className="flex flex-col justify-center items-center">
              <img src={userData?.picture || profile} className="w-8 rounded-full" />
              <h2 className="text-sm">{userData?.name?.split(" ")[0]}</h2>
            </div>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-[#101A24] px-6 py-2 border rounded-tl-xl rounded-br-xl text-white text-lg"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
