import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-white shadow-md">
        <h1 className="text-lg md:text-xl font-extrabold text-black hover:text-gray-700">
          <Link to="/">Blog Master</Link>
        </h1>
        <h3 className="text-black hover:text-gray-700">
          <Link to="/register">Register</Link>
        </h3>
      </div>

      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-50">
        <div className="flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[25%] bg-white p-6 rounded-lg shadow-xl">
          <h1 className="text-xl font-bold text-black">Log in to your account</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Log in
          </button>
          {error && (
            <h3 className="text-red-500 text-sm mt-2">
              Something went wrong, please try again.
            </h3>
          )}
          <div className="flex justify-center items-center space-x-3 mt-4">
            <p className="text-gray-600">New here?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
