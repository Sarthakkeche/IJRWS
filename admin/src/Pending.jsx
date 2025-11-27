// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   FaFileAlt,
//   FaDownload,
//   FaExclamationTriangle,
//   FaSpinner,
// } from "react-icons/fa";

// const PendingManuscripts = () => {
//   const [manuscripts, setManuscripts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchManuscripts();
//   }, []);

//   const fetchManuscripts = async () => {
//     try {
//       const res = await axios.get("https://ijspr.onrender.com/api/manuscripts");
//       setManuscripts(res.data);
//     } catch (err) {
//       setError("Failed to load manuscripts.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-100 flex flex-col items-center p-6 sm:p-10 font-sans">
//       <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
//         {/* Header */}
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-10 flex items-center gap-3 relative group">
//           <FaFileAlt className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
//           <span className="group-hover:text-yellow-400 transition-colors duration-300">
//             Pending Manuscripts
//           </span>
//         </h1>

//         {/* Manuscripts List */}
//         <div className="w-full max-w-5xl">
//           {loading ? (
//             <div className="flex justify-center items-center gap-3 text-lg text-slate-400">
//               <FaSpinner className="animate-spin text-2xl" />
//               <span>Loading Manuscripts...</span>
//             </div>
//           ) : error ? (
//             <div className="flex flex-col items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-lg">
//               <FaExclamationTriangle className="text-3xl" />
//               <p className="font-semibold">{error}</p>
//             </div>
//           ) : manuscripts.length === 0 ? (
//             <div className="text-center text-slate-500 py-10">
//               <p className="text-lg">No pending manuscripts found.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {manuscripts.map((m) => (
//                 <div
//                   key={m._id}
//                   className="flex flex-col justify-between bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 shadow-lg"
//                 >
//                   <div className="space-y-2">
//                     <h2 className="text-xl font-semibold text-slate-100">
//                       {m.paperTitle}
//                     </h2>
//                     <p className="text-sm text-slate-400">
//                       <span className="font-medium text-slate-200">
//                         Author:
//                       </span>{" "}
//                       {m.authorName}
//                     </p>
//                     <p className="text-sm text-slate-400">
//                       <span className="font-medium text-slate-200">Email:</span>{" "}
//                       {m.email}
//                     </p>
//                     <p className="text-sm text-slate-400">
//                       <span className="font-medium text-slate-200">
//                         Unique Code:
//                       </span>{" "}
//                       {m.uniqueCode}
//                     </p>
//                   </div>

//                   {m.fileUrl && (
//                     <a
//                       href={`https://ijspr-backend.onrender.com${m.fileUrl}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       download
//                       className="mt-4 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
//                     >
//                       <FaDownload />
//                       Download Manuscript
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingManuscripts;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFileAlt, FaDownload, FaExclamationTriangle, FaSpinner } from "react-icons/fa";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://ijspr.onrender.com" // <- change to your backend URL in production
    : "http://localhost:5000";

const isFileKey = (k) => {
  if (!k) return false;
  const kk = k.toLowerCase();
  return kk.includes("file") || kk.includes("fileurl") || kk === "fileurl" || kk === "paperfile";
};

const prettyKey = (k) => {
  // make field names nicer for display
  if (!k) return "";
  return k
    .replace(/([A-Z])/g, " $1")
    .replace(/[_\-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function PendingManuscripts() {
  const [manuscripts, setManuscripts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchManuscripts();
  }, []);

  const fetchManuscripts = async () => {
    setLoading(true);
    setError("");
    try {
       const res = await axios.get("https://ijspr.onrender.com/api/manuscripts/pending");
      setManuscripts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("❌ Failed to load manuscripts:", err);
      setError("Failed to load manuscripts. Check backend URL / CORS / server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-100 flex flex-col items-center p-6 sm:p-10 font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-8 flex items-center gap-3">
          <FaFileAlt className="text-yellow-400" />
          Pending Manuscripts
        </h1>

        <div className="w-full max-w-5xl">
          {loading ? (
            <div className="flex justify-center items-center gap-3 text-lg text-slate-400">
              <FaSpinner className="animate-spin text-2xl" />
              <span>Loading Manuscripts...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-lg">
              <FaExclamationTriangle className="text-3xl" />
              <p className="font-semibold">{error}</p>
            </div>
          ) : manuscripts.length === 0 ? (
            <div className="text-center text-slate-500 py-10">
              <p className="text-lg">No pending manuscripts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {manuscripts.map((m) => (
                <div
                  key={m._id || m.uniqueCode || Math.random()}
                  className="flex flex-col justify-between bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 shadow-lg"
                >
                  <div className="space-y-3">
                    {/* Title + subtitle */}
                    <h2 className="text-xl font-semibold text-slate-100">
                      {m.paperTitle || m.title || m.name || "Untitled"}
                    </h2>

                    {/* Render every field */}
                    <div className="grid gap-1">
                      {Object.keys(m)
                        .filter((k) => k !== "__v")
                        .map((key) => {
                          const value = m[key];
                          // show _id but label nicely
                          if (key === "_id") {
                            return (
                              <p key={key} className="text-xs text-slate-500">
                                <span className="font-medium text-slate-300">ID:</span>{" "}
                                {value}
                              </p>
                            );
                          }

                          // don't duplicate title displayed above
                          if (["paperTitle", "title", "name"].includes(key)) return null;

                          // format dates
                          if ((key.toLowerCase().includes("date") || key.toLowerCase().includes("at")) && value) {
                            const d = new Date(value);
                            if (!Number.isNaN(d.getTime())) {
                              return (
                                <p key={key} className="text-sm text-slate-400">
                                  <span className="font-medium text-slate-200">{prettyKey(key)}:</span>{" "}
                                  {d.toLocaleString()}
                                </p>
                              );
                            }
                          }

                          // file links will be rendered below, but still show path if needed
                          if (isFileKey(key)) {
                            return (
                              <p key={key} className="text-sm text-slate-400">
                                <span className="font-medium text-slate-200">{prettyKey(key)}:</span>{" "}
                                {typeof value === "string" ? value.split("/").pop() : String(value)}
                              </p>
                            );
                          }

                          // default rendering
                          return (
                            <p key={key} className="text-sm text-slate-400">
                              <span className="font-medium text-slate-200">{prettyKey(key)}:</span>{" "}
                              {value === null || value === undefined ? (
                                <i className="text-slate-500">N/A</i>
                              ) : typeof value === "object" ? (
                                <pre className="text-xs text-slate-300">{JSON.stringify(value)}</pre>
                              ) : (
                                String(value)
                              )}
                            </p>
                          );
                        })}
                    </div>
                  </div>

                  {/* Download link (choose first file-like field available) */}
                  <div className="mt-4">
                    {(() => {
                      const fileKey = Object.keys(m).find((k) => isFileKey(k) && m[k]);
                      const rawPath = fileKey ? m[fileKey] : null;
                      if (!rawPath) return null;

                      // build href: if rawPath already looks absolute, use it; otherwise prefix with API_BASE_URL
                      const href =
                        rawPath.startsWith("http") || rawPath.startsWith("https")
                          ? rawPath
                          : rawPath.startsWith("/")
                          ? `${API_BASE_URL}${rawPath}`
                          : `${API_BASE_URL}/${rawPath}`;

                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          download
                          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
                        >
                          <FaDownload />
                          Download Manuscript
                        </a>
                      );
                    })()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* small refresh button */}
        <div className="mt-8">
          <button
            onClick={fetchManuscripts}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
