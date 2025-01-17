// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";
// import { URL } from "../url";
// import { Link, useNavigate } from "react-router-dom";

// const Menu = () => {
//   const { user } = useContext(UserContext);
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(URL + "/api/auth/logout", { withCredentials: true });
//       setUser(null);
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="absolute top-full left-0 bg-gradient-to-r from-gray-800 to-gray-900 w-[240px] rounded-lg shadow-lg z-10 flex flex-col items-start p-6 space-y-4">
//       {!user && (
//         <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
//           <Link to="/login">Login</Link>
//         </h3>
//       )}
//       {!user && (
//         <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
//           <Link to="/register">Register</Link>
//         </h3>
//       )}
//       {user && (
//         <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
//           <Link to={"/profile/" + user._id}>Profile</Link>
//         </h3>
//       )}
//       {user && (
//         <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
//           <Link to="/write">Write</Link>
//         </h3>
//       )}
//       {user && (
//         <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
//           <Link to={"/myblogs/" + user._id}>My Blogs</Link>
//         </h3>
//       )}
//       {user && (
//         <h3
//           onClick={handleLogout}
//           className="text-white text-sm hover:text-red-500 transition-all cursor-pointer"
//         >
//           Logout
//         </h3>
//       )}
//     </div>
//   );
// };

// export default Menu;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(URL + "/api/auth/logout", { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute top-full left-0 bg-gradient-to-r from-gray-800 to-gray-900 w-full sm:w-[240px] lg:w-[280px] rounded-lg shadow-lg z-10 flex flex-col items-start p-4 sm:p-6 space-y-4">
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
          <Link to="/login">Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
          <Link to={"/profile/" + user._id}>Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
          <Link to="/write">Write</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-300 transition-all cursor-pointer">
          <Link to={"/myblogs/" + user._id}>My Blogs</Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white text-sm hover:text-red-500 transition-all cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;

