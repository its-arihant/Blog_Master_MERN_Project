import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from 'axios'
import { URL } from '../url'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const validateEmail = (email) => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    // Password regex pattern: At least one small char, one large char, one num, 8 chars, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  const handleRegister = async () => {
    // Check for email validity
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    // Check for password strength
    if (!validatePassword(password)) {
      setError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    try {
      const res = await axios.post(URL + "/api/auth/register", { username, email, password });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(""); // Clear any existing errors
      navigate("/login");
    } catch (err) {
      setError("Something went wrong.");
      console.log(err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Master</Link></h1>
        <h3><Link to="/login">Login</Link></h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black"
          >
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm">{error}</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
