import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex mt-8 space-x-4 hover:scale-105 transition-transform duration-300">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF + post.photo}
          alt=""
          className="h-full w-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300"
        />
      </div>
      <div className="flex flex-col w-[65%] space-y-3">
        <h1 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition duration-300">
          {post.title}
        </h1>
        <div className="flex text-sm font-semibold text-gray-500 justify-between">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-gray-600">{post.desc.slice(0, 200)} ...Read more</p>
      </div>
    </div>
  );
};

export default HomePosts;
