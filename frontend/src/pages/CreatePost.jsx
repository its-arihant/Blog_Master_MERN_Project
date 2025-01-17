// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { ImCross } from 'react-icons/im';
// import { useContext, useState } from 'react';
// import { UserContext } from '../context/UserContext';
// import { URL } from '../url';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [file, setFile] = useState(null);
//   const { user } = useContext(UserContext);
//   const [cat, setCat] = useState('');
//   const [cats, setCats] = useState([]);

//   const navigate = useNavigate();

//   const deleteCategory = (i) => {
//     let updatedCats = [...cats];
//     updatedCats.splice(i, 1); // Corrected from splice(i) to splice(i, 1)
//     setCats(updatedCats);
//   };

//   const addCategory = () => {
//     let updatedCats = [...cats];
//     updatedCats.push(cat);
//     setCat('');
//     setCats(updatedCats);
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const post = {
//       title,
//       desc,
//       username: user.username,
//       userId: user._id,
//       categories: cats,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append('img', filename);
//       data.append('file', file);
//       post.photo = filename;
//       try {
//         const imgUpload = await axios.post(URL + '/api/upload', data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     try {
//       const res = await axios.post(URL + '/api/posts/create', post, {
//         withCredentials: true,
//       });
//       navigate('/posts/post/' + res.data._id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="px-6 md:px-[200px] mt-8">
//         <h1 className="font-bold md:text-2xl text-xl mb-6">Create a Post</h1>
//         <form className="w-full flex flex-col space-y-6 md:space-y-8 mt-4">
//           <input
//             onChange={(e) => setTitle(e.target.value)}
//             type="text"
//             placeholder="Enter post title"
//             className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
//           />
//           <input
//             onChange={(e) => setFile(e.target.files[0])}
//             type="file"
//             className="px-4 py-2 border-2 border-gray-300 rounded-md"
//           />
//           <div className="flex flex-col mt-4">
//             <div className="flex items-center space-x-6">
//               <input
//                 value={cat}
//                 onChange={(e) => setCat(e.target.value)}
//                 className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
//                 placeholder="Enter post category"
//                 type="text"
//               />
//               <div
//                 onClick={addCategory}
//                 className="bg-black text-white px-4 py-2 font-semibold rounded-md cursor-pointer transition-all hover:bg-gray-700"
//               >
//                 Add
//               </div>
//             </div>

//             {/* Display categories */}
//             <div className="flex mt-4 space-x-4 flex-wrap">
//               {cats?.map((c, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-center items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full"
//                 >
//                   <p className="text-sm">{c}</p>
//                   <p
//                     onClick={() => deleteCategory(i)}
//                     className="text-white bg-black rounded-full cursor-pointer p-1 text-xs"
//                   >
//                     <ImCross />
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <textarea
//             onChange={(e) => setDesc(e.target.value)}
//             rows={10}
//             className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
//             placeholder="Enter post description"
//           />
//           <button
//             onClick={handleCreate}
//             className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-3 rounded-md text-lg transition-all hover:bg-gray-700"
//           >
//             Create Post
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CreatePost;


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImCross } from 'react-icons/im';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
  };

  const addCategory = () => {
    if (cat.trim()) {
      let updatedCats = [...cats];
      updatedCats.push(cat);
      setCat('');
      setCats(updatedCats);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!title || !desc || cats.length === 0) {
      setError('Please fill in all fields and add at least one category.');
      return;
    }

    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    console.log('Post Data:', post);  // Log post data to check if it's correct

    // File upload logic
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('img', filename);
      data.append('file', file);
      post.photo = filename;

      try {
        const imgUpload = await axios.post(URL + '/api/images', data);
        console.log('Image upload successful:', imgUpload);
      } catch (err) {
        setError('Error uploading image. Please try again.');
        console.log('Image upload error:', err);
        return;
      }
    }

    try {
      // Post creation request
      const res = await axios.post(URL + '/api/posts/create', post, {
        withCredentials: true,
      });
      console.log('Post creation successful:', res);  // Log successful response

      // Reset error state, and form fields
      setError('');
      setTitle('');
      setDesc('');
      setCat('');
      setCats([]);
      setFile(null);

      // Navigate to the newly created post
      navigate('/posts/post/' + res.data._id);
    } catch (err) {
      setError('Error creating post. Please try again.');
      console.log('Post creation error:', err);  // Log error
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mb-6">Create a Post</h1>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        <form className="w-full flex flex-col space-y-6 md:space-y-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            placeholder="Enter post title"
            className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="px-4 py-2 border-2 border-gray-300 rounded-md"
          />
          <div className="flex flex-col mt-4">
            <div className="flex items-center space-x-6">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
                placeholder="Enter post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold rounded-md cursor-pointer transition-all hover:bg-gray-700"
              >
                Add
              </div>
            </div>

            {/* Display categories */}
            <div className="flex mt-4 space-x-4 flex-wrap">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full"
                >
                  <p className="text-sm">{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-xs"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            rows={10}
            value={desc}
            className="px-4 py-3 rounded-md outline-none border-2 border-gray-300 focus:border-black transition-all"
            placeholder="Enter post description"
          />
          <button
            onClick={handleCreate}
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-3 rounded-md text-lg transition-all hover:bg-gray-700"
          >
            Create Post
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
