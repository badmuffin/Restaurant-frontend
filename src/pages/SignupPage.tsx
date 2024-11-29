import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegisterApi from "../hooks/api/useRegisterApi";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser } = useRegisterApi();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await registerUser(name, email, password);
      if (res.success) {
        console.log("User Signup Success: ", res);
        setSuccessMsg("User Registeration Successful");
        navigate("/");
      } else {
        setErrorMsg(res.errorMsg || "Failed! Try Again");
      }
    } catch (error) {
      console.log("Signup Error: ", error);
      setErrorMsg("An expected error occurred. Please try again");
    }
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen bg-orange-300">
      <div className="max-w-md w-full bg-white p-8 rounded-lg">
        <Link to="/" className="underline">
          back
        </Link>
        <div className="text-2xl font-semibold text-center text-gray-800 mb-6">
          <p>Hi there!</p>
          <p className="font-normal text-sm text-gray-800">
            Please enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => setShowPassword(!showPassword)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="text-red-500 text-center">
            {errorMsg ? <p>${errorMsg}</p> : <p></p>}
          </div>
          <div className="text-green-500 text-center">
            {successMsg && <p>{successMsg}</p>}
          </div>

          <div className="text-center mb-4">
            <button
              type="submit"
              className="w-full py-2 text-white bg-orange-600 hover:bg-orange-700 rounded transition duration-300"
            >
              Signup
            </button>
          </div>
        </form>

        <div className="text-center mb-4">
          <span className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline">
              Login
            </Link>
          </span>
        </div>

        <div className="relative mb-6">
          <div className="border-t border-gray-300 text-center">
            <span className="bg-white px-3 text-gray-600">Or</span>
          </div>
        </div>

        <div className="flex justify-between border hover:border-orange-700">
          <div className="w-full py-2 border border-gray-300 rounded text-center flex justify-center items-center">
            <img
              src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
              alt="Google"
              className="w-12 h-6 mr-2"
            />
            <span className="text-gray-700">Signup with Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
