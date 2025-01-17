// import { IF } from "../url";

// const HomePosts = ({ post }) => {
//   return (
//     <div className="w-full flex mt-8 space-x-4 hover:scale-105 transition-transform duration-300">
//       <div className="w-[35%] h-[200px] flex justify-center items-center">
//         <img
//           src={IF + post.photo}
//           alt=""
//           className="h-full w-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300"
//         />
//       </div>
//       <div className="flex flex-col w-[65%] space-y-3">
//         <h1 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition duration-300">
//           {post.title}
//         </h1>
//         <div className="flex text-sm font-semibold text-gray-500 justify-between">
//           <p>@{post.username}</p>
//           <div className="flex space-x-2">
//             <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
//             <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
//           </div>
//         </div>
//         <p className="text-gray-600">{post.desc.slice(0, 200)} ...Read more</p>
//       </div>
//     </div>
//   );
// };

// export default HomePosts;

import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4 hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF + post.photo}
          alt={post.title}
          className="h-full w-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full md:w-[65%] space-y-3">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition duration-300 line-clamp-2">
          {post.title}
        </h1>

        {/* Post Info */}
        <div className="flex text-sm font-semibold text-gray-500 justify-between">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toDateString()}</p>
            <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 line-clamp-3">
          {post.desc.slice(0, 200)}... <span className="text-purple-600">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default HomePosts;

