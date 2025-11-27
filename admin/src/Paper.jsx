import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFileUpload, FaFileAlt, FaDownload, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

const PaperManagement = () => {
  const { id } = useParams();
  const [papers, setPapers] = useState([]);
  const [title, setTitle] = useState('');
  const [Author , setAuthor] = useState('');
  const [Date , setDate]= useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uniqueCode, setUniqueCode] = useState('');


  useEffect(() => {
    fetchPapers();
  }, [id]);

  const fetchPapers = async () => {
    try {
      const res = await axios.get(`https://ijspr.onrender.com/api/papers/${id}`);
      
      setPapers(res.data);
    } catch (err) {
      setError("Failed to load papers.");
    } finally {
      setLoading(false);
    }
  };

  const uploadPaper = async () => {
    if (!title.trim() || !file) return alert("Please enter a title and select a file.");
    const formData = new FormData();
    formData.append('title', title);
    formData.append('Author',Author);
    formData.append('Date',Date);
    formData.append('file', file);
     formData.append('uniqueCode', uniqueCode);

    try {
      await axios.post(`https://ijspr.onrender.com/api/papers/${id}`, formData);
      setTitle('');
      setAuthor('');
      setDate('');
       setUniqueCode('');
      setFile(null);
      fetchPapers();
    } catch (err) {
      alert("Upload failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-100 flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-10 flex items-center gap-3 relative group">
          <FaFileAlt className="text-pink-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-pink-400 transition-colors duration-300">Paper Management</span>
        </h1>

        {/* Upload Form */}
        <div className="flex flex-wrap gap-3 justify-center items-center mb-10 w-full max-w-3xl">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Paper Title"
            className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
          />
           <input
            value={Author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Author"
            className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
          />
           <input
            value={Date}
            onChange={e => setDate(e.target.value)}
            placeholder="Date"
            className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
          />
          <input
            type="file"
            onChange={e => setFile(e.target.files[0])}
            className="px-3 py-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 cursor-pointer focus:outline-none"
          />
          <input
  value={uniqueCode}
  onChange={e => setUniqueCode(e.target.value)}
  placeholder="Unique Code (from manuscript)"
  className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
/>

          <button
            onClick={uploadPaper}
            className="flex items-center gap-2 bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/20 disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={!title.trim() || !file}
          >
            <FaFileUpload />
            Upload
          </button>
        </div>

        {/* Papers List */}
        <div className="w-full max-w-4xl">
          {loading ? (
            <div className="flex justify-center items-center gap-3 text-lg text-slate-400">
              <FaSpinner className="animate-spin text-2xl" />
              <span>Loading Papers...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-lg">
              <FaExclamationTriangle className="text-3xl" />
              <p className="font-semibold">{error}</p>
            </div>
          ) : papers.length === 0 ? (
            <div className="text-center text-slate-500 py-10">
              <p className="text-lg">No papers uploaded yet.</p>
              <p>Use the form above to upload one.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {papers.map(p => (
                <li
                  key={p._id}
                  className="flex justify-between items-center bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 hover:border-pink-400/50 transition-all duration-300"
                >
                  <span className="text-lg font-medium text-slate-200">{p.title}</span>
                  <a
                    href={`https://ijspr.onrender.com${p.fileUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <FaDownload />
                    Download
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperManagement;
