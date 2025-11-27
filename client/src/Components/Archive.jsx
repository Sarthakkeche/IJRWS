import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Foot from '../Components/Footer';

const ArchivePage = () => {
  const [volumes, setVolumes] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch volumes
    axios.get("https://ijspr.onrender.com/api/volumes")
      .then(res => setVolumes(res.data))
      .catch(err => console.log("Error loading volumes:", err));

    // Fetch issues
    axios.get("https://ijspr.onrender.com/api/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.log("Error loading issues:", err));
  }, []);

  // Group issues by volumeId
  const getIssuesForVolume = (volumeId) => {
    return issues.filter(issue => issue.volumeId === volumeId);
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Navbar />
      
      <section className="relative bg-gray-800 text-white py-20 px-4 md:px-20">
       
      <div className="max-w-5xl mx-auto mt-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
           <span className="text-orange-400">Archive</span>
          </h1>
         
        </div>
      </section>

      <section className="py-12 px-4 md:px-20">
        {volumes.map((vol) => (
          <div key={vol._id} className="mb-12">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
              VOLUME {vol.number || vol.name} – {vol.year}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {getIssuesForVolume(vol._id).map((issue) => (
                <Link
                  key={issue._id}
                  to={`/paper/${issue._id}`}
                  className="bg-blue-400 text-white py-2 px-4 rounded shadow hover:bg-blue-500"
                >
                  Issue {issue.number || issue.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Foot />
    </div>
  );
};

export default ArchivePage;
