// import axios from "axios";
// import { MdDelete } from "react-icons/md";
// import { URL } from "../url";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// const Comment = ({ c, post }) => {
//   const { user } = useContext(UserContext);

//   const deleteComment = async (id) => {
//     try {
//       await axios.delete(URL + "/api/comments/" + id, { withCredentials: true });
//       window.location.reload(true);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="px-4 py-3 bg-gray-100 rounded-lg shadow-md my-2">
//       <div className="flex items-center justify-between">
//         <h3 className="font-semibold text-gray-700">@{c.author}</h3>
//         <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
//           <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
//           <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
//           {user?._id === c?.userId && (
//             <p
//               className="cursor-pointer text-red-500 hover:text-red-700"
//               onClick={() => deleteComment(c._id)}
//             >
//               <MdDelete />
//             </p>
//           )}
//         </div>
//       </div>
//       <p className="px-4 mt-2 text-gray-600">{c.comment}</p>
//     </div>
//   );
// };

// export default Comment;


import axios from "axios";
import { MdDelete } from "react-icons/md";
import { URL } from "../url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ c, post }) => {
  const { user } = useContext(UserContext);

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + "/api/comments/" + id, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-6 py-4 bg-gray-50 rounded-lg shadow-md my-4 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
          <p>{new Date(c.updatedAt).toLocaleDateString()}</p>
          <p>{new Date(c.updatedAt).toLocaleTimeString()}</p>
          {user?._id === c?.userId && (
            <p
              className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-300"
              onClick={() => deleteComment(c._id)}
            >
              <MdDelete />
            </p>
          )}
        </div>
      </div>
      <p className="mt-2 text-gray-600">{c.comment}</p>
    </div>
  );
};

export default Comment;
