// // AdminPanel.jsx (Main page for admin)
// import { Link } from 'react-router-dom';

// export default function AdminPanel() {
//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
//       <div className="flex justify-center">
//         <Link to="/volume" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//           Manage Volumes
//         </Link>
        
//       </div>
//       <div className="flex justify-center">
//         <Link to="/Pending" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//           pending Paper
//         </Link>
        
//       </div>
//     </div>
//   );
// }
// AdminPanel.jsx
import { Link } from "react-router-dom";
import { FileText, Layers } from "lucide-react";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Admin Dashboard
      </h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Manage Volumes Card */}
        <Link
          to="/volume"
          className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center group"
        >
          <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition">
            <Layers className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
            Manage Volumes
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            View, organize and manage journal volumes.
          </p>
        </Link>

        {/* Pending Papers Card */}
        <Link
          to="/Pending"
          className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center group"
        >
          <div className="bg-red-100 p-4 rounded-full mb-4 group-hover:bg-red-200 transition">
            <FileText className="h-10 w-10 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition">
            Pending Papers
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Review and take action on submitted papers.
          </p>
        </Link>
      </div>
    </div>
  );
}

