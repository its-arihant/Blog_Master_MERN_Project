// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div className="mt-8 w-full bg-black px-8 py-4 flex items-center justify-between text-sm text-white">
      
//       {/* Social Media Icons */}
//       <div className="flex space-x-8">
//         <p className="text-xl hover:text-gray-400 cursor-pointer transition-all">
//           <FaFacebook />
//         </p>
//         <p className="text-xl hover:text-gray-400 cursor-pointer transition-all">
//           <FaTwitter />
//         </p>
//         <p className="text-xl hover:text-gray-400 cursor-pointer transition-all">
//           <FaInstagram />
//         </p>
//       </div>
      
//       {/* Links Section with Increased Spacing */}
//       <div className="flex space-x-20">
//         <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">Featured</p>
//         <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">Support</p>
//         <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">About</p>
//       </div>
      
//       {/* Rights Reserved */}
//       <div className="text-sm text-gray-400">
//         &copy; {new Date().getFullYear()} Blog Master. All rights reserved.
//       </div>

//     </div>
//   );
// };

// export default Footer;
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-8 w-full bg-black px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
      
      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <p className="text-2xl hover:text-gray-400 cursor-pointer transition-all">
          <FaFacebook />
        </p>
        <p className="text-2xl hover:text-gray-400 cursor-pointer transition-all">
          <FaTwitter />
        </p>
        <p className="text-2xl hover:text-gray-400 cursor-pointer transition-all">
          <FaInstagram />
        </p>
      </div>
      
      {/* Links Section */}
      <div className="flex space-x-10 mb-4 md:mb-0">
        <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">Featured</p>
        <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">Support</p>
        <p className="text-white text-sm font-semibold hover:text-gray-400 cursor-pointer">About</p>
      </div>
      
      {/* Rights Reserved */}
      <div className="text-sm text-gray-400 mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} Blog Master. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;
