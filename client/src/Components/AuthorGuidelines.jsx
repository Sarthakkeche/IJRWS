import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg3 from "../assets/abg.jpg";

const GuidelinesContent = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-blue-900 text-white py-20 mt-33 px-4 md:px-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient( rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${bg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Guidelines for <span className="text-orange-400">Authors</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            Ensure your submission to IJRWS meets our high standards of formatting, ethics, and integrity.
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-10 text-sm text-gray-800 leading-relaxed" data-aos="fade-up">

         <div>
  <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Manuscript Types</h2>
  <p className="mb-2">
    The journal accepts various types of manuscripts, including:
  </p>
  <ul className="list-disc list-inside space-y-2 text-justify">
    <li className="text-justify">
      <b>Full-length Research Articles:</b> Comprehensive studies presenting original research findings.
    </li>
    <li className="text-justify">
      <b>Short Communications:</b> Brief reports on significant findings that warrant rapid dissemination.
    </li>
    <li className="text-justify"> 
      <b>Review Articles:</b> These are comprehensive summaries of existing literature on a specific topic, offering insights, critical analysis, and suggestions for future research directions. Review articles are generally categorized into two types:
      <br></br>

     <b>Mini-Reviews:</b> Concise overviews typically spanning 7–8 pages, focusing on a narrower aspect of a topic with a limited number of references.
<br></br>
<b>Major Reviews:</b> Extensive and in-depth discussions usually exceeding 15 pages, incorporating more than 100 references, and providing a broad and detailed analysis of the literature.
    </li>
    <li className="text-justify">
      <b>Case Studies:</b> Detailed analyses of specific instances or phenomena, highlighting unique aspects or lessons learned.
    </li>
    <li className="text-justify">
      <b>Letters to the Editor:</b> Brief comments or critiques on previously published articles.
    </li>
  </ul>
</div>


          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Formatting Requirements</h2>
             <p className="mb-2">
General Formatting:  </p>
            <p className="text-justify">Manuscripts should be typed in double-spaced format on A4 size paper with 1-inch margins. Use Times New Roman font, size 14 pt for heading and size 12 pt for content  , and justify alignment throughout the document. The first page must include the title, author names, affiliations, and contact information for the corresponding author.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">3. Title and Abstract</h2>
            <p className="text-justify"><b>Title:</b> The title should be concise and informative, with a maximum of 150 characters</p>
            <p className="text-justify"><b>Abstract:</b> An abstract of no more than 250 words should summarize the research purpose, methods, significant results, and conclusions without citations. In addition to the written abstract, a graphical abstract may also be required to visually communicate the key findings or the central concept of the study, allowing readers to quickly grasp the main message of the research.</p>
            <p className="text-justify"><b>Keywords:</b> Provide 4–6 relevant keywords.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Main Sections</h2>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-justify"><b>Introduction:</b> Clearly state the objectives and background of the research. Highlight the significance of the study and its relevance to the field.</li>
              <li className="text-justify"><b>Materials and Methods:</b> Detail the materials, instruments, and procedures used to allow replication of the study. Include any statistical analyses performed and software used.</li>
              <li className="text-justify"><b>Results and Discussion:</b> : Present results clearly, using tables and figures where appropriate. Discuss findings in relation to existing literature, addressing any discrepancies and implications.</li>
              <li className="text-justify"><b>Conclusion:</b> Summarize the main findings and their significance without repeating the abstract. Suggest potential future research directions based on the findings.</li>
              <li className="text-justify"><b>References:</b> Follow the Vancouver style for citations, numbering them in the order they appear in the text. Include a complete list of references at the end of the manuscript, ensuring all cited works are included.</li>
              <li className="text-justify"><b>Figures and Tables:</b>  Include high-quality figures and tables within the text at appropriate points. Ensure all figures are at least 300 dpi and tables are simple in design without vertical rules. Each figure and table should have a descriptive caption.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Ethical Considerations</h2>
            <p className="text-justify">Include statements of ethical approval for studies involving human or animal subjects, referencing the relevant ethics committee. Disclose any potential conflicts of interest, funding sources, and acknowledgments of contributions from non-authors.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Submission Process</h2>
            <p className="text-justify">Submit the manuscript electronically to the journal's email addresses:  <a href="mailto:editorijrwsjournal@gmail.com" className="text-blue-600 underline">editorijrwsjournal@gmail.com</a>.Ensure that the manuscript has not been previously published or is under consideration elsewhere. Include a cover letter that briefly describes the significance of the work and confirms that all authors agree with the submission.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">7. Review Process</h2>
            <p className="text-justify">All submissions undergo a double-blind peer review process, ensuring impartiality. Authors will receive feedback within 2-3 weeks, and revisions may be requested.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">8. Publication Ethics</h2>
            <p className="text-justify">The journal adheres to strict publication ethics. Plagiarism, data fabrication, and other unethical practices will not be tolerated. Authors are encouraged to use plagiarism detection software before submission to ensure originality.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">9. Final Notes</h2>
            <p className="text-justify">Authors are encouraged to check the journal's website for any updates to submission guidelines and to download the manuscript template for formatting assistance. For any inquiries regarding the submission process, authors may contact the editorial office at the provided email addresses. 
By following these guidelines, authors can contribute to the quality and integrity of the International Journal of Scientific Research and Innovation. Thank you for your interest in publishing with us!
</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidelinesContent;
