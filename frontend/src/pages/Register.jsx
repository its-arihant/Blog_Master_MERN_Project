// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import axios from "axios";
// import { URL } from "../url";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleRegister = async () => {
//     if (!validateEmail(email)) {
//       setError("Invalid email address.");
//       return;
//     }

//     if (!validatePassword(password)) {
//       setError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
//       return;
//     }

//     try {
//       const res = await axios.post(URL + "/api/auth/register", { username, email, password });
//       setUsername(res.data.username);
//       setEmail(res.data.email);
//       setPassword(res.data.password);
//       setError(""); // Clear any existing errors
//       navigate("/login");
//     } catch (err) {
//       setError("Something went wrong.");
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-white shadow-md">
//         <h1 className="text-lg md:text-xl font-extrabold text-black hover:text-gray-700">
//           <Link to="/">Blog Master</Link>
//         </h1>
//         <h3 className="text-black hover:text-gray-700">
//           <Link to="/login">Login</Link>
//         </h3>
//       </div>
//       <div className="w-full flex justify-center items-center h-[80vh] bg-gray-50">
//         <div className="flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[25%] bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-xl font-bold text-black">Create an account</h1>
//           <input
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="text"
//             placeholder="Enter your username"
//           />
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="text"
//             placeholder="Enter your email"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             placeholder="Enter your password"
//           />
//           <button
//             onClick={handleRegister}
//             className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-600 transition-all duration-300"
//           >
//             Register
//           </button>
//           {error && (
//             <h3 className="text-red-500 text-sm mt-2 text-center">
//               {error}
//             </h3>
//           )}
//           <div className="flex justify-center items-center space-x-3 mt-4">
//             <p>Already have an account?</p>
//             <p className="text-gray-500 hover:text-black">
//               <Link to="/login">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Register;



import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!username) {
      setError("Username cannot be empty.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(URL + "/api/auth/register", { username, email, password });
      setUsername("");
      setEmail("");
      setPassword("");
      setError(""); // Clear any existing errors
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
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
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-50">
        <div className="flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[25%] bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-black">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your username"
            aria-label="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your email"
            aria-label="Email"
          />
          <div className="relative w-full">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              aria-label="Password"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            onClick={handleRegister}
            className="w-full px-4 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-600 transition-all duration-300"
            disabled={loading}
            aria-label="Register"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && (
            <h3 className="text-red-500 text-sm mt-2 text-center">
              {error}
            </h3>
          )}
          <div className="flex justify-center items-center space-x-3 mt-4">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
