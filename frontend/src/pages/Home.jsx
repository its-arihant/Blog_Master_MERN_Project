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

import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  // Fetch posts from the backend
  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts/${search}`);
      setPosts(res.data);
      setNoResults(res.data.length === 0);
      setLoader(false);
    } catch (err) {
      console.error(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 px-8 md:px-[200px] min-h-[80vh]">
        {/* Featured Blog Section */}
        <div className="py-8">
          {posts.length > 0 && (
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/2">
                <img
                  src={posts[0].image || "https://source.unsplash.com/800x400/?blog"}
                  alt={posts[0].title || "Featured Post"}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-800">{posts[0].title}</h1>
                <p className="mt-4 text-gray-600">
                  {posts[0].description?.slice(0, 150) || "Discover amazing content in this featured post!"}
                  ...
                </p>
                <Link
                  to={user ? `/posts/post/${posts[0]._id}` : "/login"}
                  className="mt-6 inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                to={user ? `/posts/post/${post._id}` : "/login"}
                key={post._id}
                className="block"
              >
                <HomePosts post={post} />
              </Link>
            ))}
          </div>
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
