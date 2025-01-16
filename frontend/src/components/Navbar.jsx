import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        {/* Brand Logo */}
        <h1 className="text-lg md:text-2xl font-bold hover:text-gray-300 transition-all">
          <Link to="/">Blog Master</Link>
        </h1>

        {/* Search Bar */}
        {path === "/" && (
          <div className="flex justify-center items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg">
            <button
              onClick={() =>
                navigate(prompt ? "?search=" + prompt : navigate("/"))
              }
              className="hover:text-gray-400 transition-all"
            >
              <BsSearch />
            </button>
            <input
              onChange={(e) => setPrompt(e.target.value)}
              className="outline-none bg-transparent text-white placeholder-gray-400"
              placeholder="Search a post"
              type="text"
            />
          </div>
        )}

        {/* User Options */}
        <div className="hidden md:flex items-center justify-center space-x-4">
          {!path.includes("login") && !path.includes("register") && (
            <>
              {user ? (
                <h3 className="hover:text-gray-300 transition-all">
                  <Link to="/write">Write</Link>
                </h3>
              ) : (
                <h3 className="hover:text-gray-300 transition-all">
                  <Link to="/login">Login</Link>
                </h3>
              )}
            </>
          )}

          {user ? (
            <div onClick={showMenu} className="relative cursor-pointer">
              <FaBars className="hover:text-gray-400 transition-all" />
              {menu && <Menu />}
            </div>
          ) : (
            !path.includes("login") && !path.includes("register") && (
              <h3 className="hover:text-gray-300 transition-all">
                <Link to="/register">Register</Link>
              </h3>
            )
          )}
        </div>

        {/* Mobile Menu */}
        <div
          onClick={showMenu}
          className="md:hidden text-lg cursor-pointer relative"
        >
          <FaBars className="hover:text-gray-400 transition-all" />
          {menu && <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



