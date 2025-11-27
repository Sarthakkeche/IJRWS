import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Foot from '../Components/Footer';

const CurrentIssuePage = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const fetchLatestPapers = async () => {
      try {
        const res = await axios.get('https://ijspr.onrender.com/api/papers/latest');
        setPapers(res.data);
      } catch (err) {
        console.error('Error fetching latest papers:', err);
      }
    };

    fetchLatestPapers();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar />

      <section className="relative bg-gray-800 text-white py-20 px-4 md:px-20 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Latest Papers</h1>
          <p className="text-lg mt-2">Top 10 Recently Uploaded Papers</p>
        </div>
      </section>

      <section className="flex-grow py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {papers.length > 0 ? (
            papers.map(paper => (
              <div key={paper._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">{paper.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{paper.Author || "Unknown Author"}</p>
                <p className="text-sm text-gray-700 mb-3">{paper.Date || "Date not provided"}</p>
                <a
                  href={`https://ijspr.onrender.com${paper.fileUrl}`}
                  className="inline-block mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No recent papers found.</p>
          )}
        </div>
      </section>

      <Foot />
    </div>
  );
};

export default CurrentIssuePage;
