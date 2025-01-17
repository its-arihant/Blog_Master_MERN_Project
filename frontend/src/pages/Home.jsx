// import axios from "axios"
// import Footer from "../components/Footer"
// import HomePosts from "../components/HomePosts"
// import Navbar from "../components/Navbar"
// import { IF, URL } from "../url"
// import { useContext, useEffect, useState } from "react"
// import { Link, useLocation } from "react-router-dom"
// import Loader from '../components/Loader'
// import { UserContext } from "../context/UserContext"
 

// const Home = () => {
  
//   const {search}=useLocation()
//   // console.log(search)
//   const [posts,setPosts]=useState([])
//   const [noResults,setNoResults]=useState(false)
//   const [loader,setLoader]=useState(false)
//   const {user}=useContext(UserContext)
//   // console.log(user)

//   const fetchPosts=async()=>{
//     setLoader(true)
//     try{
//       const res=await axios.get(URL+"/api/posts/"+search)
//       // console.log(res.data)
//       setPosts(res.data)
//       if(res.data.length===0){
//         setNoResults(true)
//       }
//       else{
//         setNoResults(false)
//       }
//       setLoader(false)
      
//     }
//     catch(err){
//       console.log(err)
//       setLoader(true)
//     }
//   }

//   useEffect(()=>{
//     fetchPosts()

//   },[search])



//   return (
    
//     <>
//     <Navbar/>
// <div className="px-8 md:px-[200px] min-h-[80vh]">
//         {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
//         posts.map((post)=>(
          
//           <Link to={user?`/posts/post/${post._id}`:"/login"}>
//           <HomePosts key={post._id} post={post}/>
//           </Link>
          
          
//         )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
//     </div>
//     <Footer/>
//     </>
    
//   )
// }

// export default Home

// import axios from "axios";
// import Footer from "../components/Footer";
// import HomePosts from "../components/HomePosts";
// import Navbar from "../components/Navbar";
// import { IF, URL } from "../url";
// import { useContext, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Loader from '../components/Loader';
// import { UserContext } from "../context/UserContext";

// const Home = () => {
//   const { search } = useLocation();
//   const [posts, setPosts] = useState([]);
//   const [noResults, setNoResults] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const { user } = useContext(UserContext);

//   const fetchPosts = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(`${URL}/api/posts/${search}`);
//       setPosts(res.data);
//       setNoResults(res.data.length === 0);
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
//     <>
//       <Navbar />
//       <div className="px-4 md:px-16 lg:px-32 min-h-[80vh]">
//         {loader ? (
//           <div className="h-[40vh] flex justify-center items-center">
//             <Loader />
//           </div>
//         ) : !noResults ? (
//           posts.map((post) => (
//             <Link
//               to={user ? `/posts/post/${post._id}` : "/login"}
//               key={post._id}
//               className="block mb-6 hover:scale-105 transition-transform"
//             >
//               <HomePosts post={post} />
//             </Link>
//           ))
//         ) : (
//           <h3 className="text-center font-bold mt-16 text-gray-500">
//             No posts available
//           </h3>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IF, URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts/${search}`);
      setPosts(res.data);
      setNoResults(res.data.length === 0);
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
    <>
      <Navbar />
      <div className="px-4 md:px-16 lg:px-32 min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Post Image */}
                <img
                  src={IF + post.photo}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                {/* Post Content */}
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 hover:text-purple-600 transition duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {post.desc.slice(0, 150)}...
                  </p>

                  {/* Post Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <p>@{post.username}</p>
                    <p>{new Date(post.updatedAt).toDateString()}</p>
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={user ? `/posts/post/${post._id}` : "/login"}
                    className="block mt-4 text-center px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-center font-bold mt-16 text-gray-500">
            No posts available
          </h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;

