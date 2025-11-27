import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Foot from './Footer';

const PagePaper = () => {
  const { issueId } = useParams();
  const [papers, setPapers] = useState([]);
  const [issueName, setIssueName] = useState('');

  useEffect(() => {
    axios.get(`https://ijspr.onrender.com/api/papers/${issueId}`)
      .then(res => setPapers(res.data))
      .catch(err => console.error('Error loading papers:', err));

    axios.get(`https://ijspr.onrender.com/api/issues`)
      .then(res => {
        const issue = res.data.find(i => i._id === issueId);
        if (issue) setIssueName(issue.name || issue.number || "Unknown Issue");
      })
      .catch(err => console.error("Error loading issue name:", err));
  }, [issueId]);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen text-gray-800 flex flex-col justify-between">
      <Navbar />

      {/* Issue Title Centered */}
      <div className="text-center mt-40 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Issue: {issueName}</h1>
      </div>

      {/* Cards Container */}
      <div className="flex-grow px-6 md:px-20 mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {papers.length > 0 ? (
          papers.map((paper) => (
            <div
              key={paper._id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-[220px] overflow-hidden rounded mb-4">
                <img
                  src="/placeholder-blur.png"
                  alt="Preview"
                  className="w-full h-full object-cover blur-sm"
                />
              </div>
              <h2 className="text-lg font-semibold text-center text-gray-700">{paper.title}</h2>
               <h3 className="text-lg font-semibold text-center text-gray-700">{paper.Author}</h3>
                <h4 className="text-lg font-semibold text-center text-gray-700">{paper.Date}</h4>
              <a
                href={`https://ijspr.onrender.com${paper.fileUrl}`}
                download
                className="mt-4 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
              >
                Download
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No papers found for this issue.</p>
        )}
      </div>

      <Foot />
    </div>
  );
};

export default PagePaper;
