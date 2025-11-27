import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaBookOpen, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';

const VolumeManagement = () => {
  const [volumes, setVolumes] = useState([]);
  const [newVolume, setNewVolume] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchVolumes();
  }, []);

  const fetchVolumes = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulated delay
      const res = await axios.get('https://ijspr.onrender.com/api/volumes');
      if (Array.isArray(res.data)) {
        setVolumes(res.data);
      } else {
        setError("Failed to load volumes: Invalid data format.");
      }
    } catch (err) {
      setError("Could not connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateVolume = async (e) => {
    e.preventDefault();
    if (!newVolume.trim()) return;
    try {
      const res = await axios.post('https://ijspr.onrender.com/api/volumes', { name: newVolume });
      setVolumes(prev => [...prev, res.data]);
      setNewVolume('');
    } catch (err) {
      alert("Error creating volume. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-slate-100 flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* --- Header --- */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-10 flex items-center gap-3 relative group">
          <FaBookOpen className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-cyan-400 transition-colors duration-300">Volume Management</span>
        </h1>

        {/* --- Input Form --- */}
        <form onSubmit={handleCreateVolume} className="flex flex-wrap gap-3 justify-center items-center mb-12 w-full max-w-xl">
          <input
            value={newVolume}
            onChange={e => setNewVolume(e.target.value)}
            placeholder="Enter New Volume Name"
            className="flex-grow px-5 py-3 bg-slate-800 border border-slate-700 rounded-lg shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
            disabled={!newVolume.trim()}
          >
            <FaPlus />
            Create
          </button>
        </form>

        {/* --- Content Area --- */}
        <div className="w-full">
          {loading ? (
            <div className="flex justify-center items-center gap-3 text-lg text-slate-400">
              <FaSpinner className="animate-spin text-2xl" />
              <span>Loading Volumes...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-3 text-red-400 bg-red-900/20 p-4 rounded-lg">
              <FaExclamationTriangle className="text-3xl" />
              <p className="font-semibold">{error}</p>
            </div>
          ) : volumes.length === 0 ? (
            <div className="text-center text-slate-500 py-10">
              <p className="text-lg">No volumes found.</p>
              <p>Use the form above to create your first one.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {volumes.map(v => (
                <div
                  key={v._id}
                  onClick={() => navigate(`/issue/${v._id}`)}
                  className="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 text-center transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center h-48"
                >
                  <FaBookOpen className="text-4xl text-slate-500 mb-4 group-hover:text-cyan-400 transition-colors duration-300" />
                  <h2 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                    {v.name}
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

export default VolumeManagement;
