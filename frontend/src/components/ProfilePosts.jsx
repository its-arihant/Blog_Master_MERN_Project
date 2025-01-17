// import { IF } from "../url";

// const ProfilePosts = ({ p }) => {
//   return (
//     <div className="w-full flex mt-8 space-x-6 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
//       {/* Left: Image */}
//       <div className="w-[35%] h-[200px] flex justify-center items-center bg-gray-100">
//         <img
//           src={IF + p.photo}
//           alt={p.title}
//           className="h-full w-full object-cover rounded-l-lg"
//         />
//       </div>

//       {/* Right: Post Content */}
//       <div className="flex flex-col w-[65%] p-4 space-y-3">
//         {/* Title */}
//         <h1 className="text-lg md:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-all">
//           {p.title}
//         </h1>

//         {/* Metadata */}
//         <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
//           <p className="text-gray-600">@{p.username}</p>
//           <div className="flex space-x-2 text-gray-500">
//             <p>{new Date(p.updatedAt).toDateString()}</p>
//             <p>{new Date(p.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm md:text-base text-gray-700 leading-relaxed">
//           {p.desc.slice(0, 200)}{" "}
//           <span className="text-blue-500 font-medium cursor-pointer hover:underline">
//             ...Read more
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePosts;
import { IF } from "../url";
import { useState } from "react";

const ProfilePosts = ({ p }) => {
  const [expanded, setExpanded] = useState(false);
  const handleReadMore = () => setExpanded(!expanded);

  // Function to format the date and time
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full flex mt-8 space-x-6 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
      {/* Left: Image */}
      <div className="w-[35%] h-[200px] flex justify-center items-center bg-gray-100">
        <img
          src={IF + p.photo}
          alt={p.title}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>

      {/* Right: Post Content */}
      <div className="flex flex-col w-[65%] p-4 space-y-3">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-all">
          {p.title}
        </h1>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
          <p className="text-gray-600">@{p.username}</p>
          <div className="flex space-x-2 text-gray-500">
            <p>{formatDate(p.updatedAt)}</p>
            <p>{new Date(p.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {expanded ? p.desc : p.desc.slice(0, 200)}{" "}
          <span
            onClick={handleReadMore}
            className="text-blue-500 font-medium cursor-pointer hover:underline"
          >
            {expanded ? "Read less" : "...Read more"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
