// import { Link, useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";
// import { URL } from "../url";
// import HomePosts from "../components/HomePosts";
// import Loader from "../components/Loader";

// const MyBlogs = () => {
//   const { search } = useLocation();
//   const [posts, setPosts] = useState([]);
//   const [noResults, setNoResults] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const { user } = useContext(UserContext);

//   const fetchPosts = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(URL + "/api/posts/user/" + user._id);
//       setPosts(res.data);
//       if (res.data.length === 0) {
//         setNoResults(true);
//       } else {
//         setNoResults(false);
//       }
//       setLoader(false);
//     } catch (err) {
//       console.log(err);
//       setLoader(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [search]);

//   return (
//     <div>
//       <Navbar />
//       <div className="px-8 md:px-[200px] min-h-[80vh] pt-8">
//         {loader ? (
//           <div className="h-[40vh] flex justify-center items-center">
//             <Loader />
//           </div>
//         ) : !noResults ? (
//           posts.map((post) => (
//             <Link
//               to={user ? `/posts/post/${post._id}` : "/login"}
//               key={post._id}
//               className="block mb-6 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md p-4 bg-white shadow-md hover:bg-gray-50"
//             >
//               <HomePosts post={post} />
//             </Link>
//           ))
//         ) : (
//           <h3 className="text-center font-bold mt-16 text-xl text-gray-600">
//             No posts available
//           </h3>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MyBlogs;


import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import HomePosts from "../components/HomePosts";
import Loader from "../components/Loader";

const MyBlogs = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] min-h-[80vh] pt-8">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link
              to={user ? `/posts/post/${post._id}` : "/login"}
              key={post._id}
              className="block mb-6 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-md p-6 bg-white shadow-md hover:bg-gray-50"
            >
              <HomePosts post={post} />
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center mt-16">
            <h3 className="text-center font-bold text-2xl text-gray-600 px-4 py-2 bg-gray-100 rounded-md shadow-md">
              No posts available
            </h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
