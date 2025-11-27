import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaPlus, FaBook, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

const IssueManagement = () => {
  const { id } = useParams();
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchIssues();
  }, [id]);

  const fetchIssues = async () => {
    try {
      const res = await axios.get(`https://ijspr.onrender.com/api/issues/${id}`);
      setIssues(res.data);
    } catch (err) {
      setError("Failed to load issues. Check your server.");
    } finally {
      setLoading(false);
    }
  };

  const createIssue = async () => {
    if (!newIssue.trim()) return;
    try {
      const res = await axios.post(`https://ijspr.onrender.com/api/issues/${id}`, { name: newIssue });
      setIssues(prev => [...prev, res.data]);
      setNewIssue('');
    } catch (err) {
      alert("Failed to create issue.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-100 flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-10 flex items-center gap-3 relative group">
          <FaBook className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-purple-400 transition-colors duration-300">Issue Management</span>
        </h1>

        {/* Input Form */}
        <div className="flex flex-wrap gap-3 justify-center items-center mb-12 w-full max-w-xl">
          <input
            value={newIssue}
            onChange={e => setNewIssue(e.target.value)}
            placeholder="Enter New Issue Name"
            className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
          />
          <button
            onClick={createIssue}
            disabled={!newIssue.trim()}
            className="flex items-center gap-2 bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
          >
            <FaPlus />
            Create
          </button>
        </div>

        {/* Issues Display */}
        <div className="w-full">
          {loading ? (
            <div className="flex justify-center items-center gap-3 text-lg text-slate-400">
              <FaSpinner className="animate-spin text-2xl" />
              <span>Loading Issues...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-lg">
              <FaExclamationTriangle className="text-3xl" />
              <p className="font-semibold">{error}</p>
            </div>
          ) : issues.length === 0 ? (
            <div className="text-center text-slate-500 py-10">
              <p className="text-lg">No issues found.</p>
              <p>Use the form above to create your first one.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {issues.map(issue => (
                <div
                  key={issue._id}
                  onClick={() => navigate(`/paper/${issue._id}`)}
                  className="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 text-center transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center h-48"
                >
                  <FaBook className="text-4xl text-slate-500 mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                  <h2 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                    {issue.name}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueManagement;
