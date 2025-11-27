import React from "react";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg3 from "../assets/abg.jpg";

const InfoAuthors = () => {
     useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);


  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800 text-justify">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-blue-900 text-white py-20 mt-33 px-4 md:px-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${bg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            Information for <span className="text-orange-400">Authors</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            Ensure your submission to IJRWS meets our high standards of formatting, ethics, and integrity.
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div
          className="max-w-5xl mx-auto space-y-10 text-sm text-gray-800 leading-relaxed"
          data-aos="fade-up"
        >
          {/* GENERAL */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">GENERAL</h2>
            <p className="mb-2">
              The  International journal of Research welfare society(IJRWS), an official publication of IJRWS, is published by Medknow Publications, Mumbai, India, monthly in each year. Our website is SSL-certified (HTTPS):{" "}
              <a href="https://www.ijsri.org" className="text-blue-600 underline">
                www.IJRWS.com
              </a>. The e-mail ID is{" "}
              <a href="mailto:editorijrwsjournal@gmail.com" className="text-blue-600 underline">
                editorijrwsjournal@gmail.com
              </a>.
            </p>
          </div>

          {/* SCOPE */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Scope</h2>
            <p>
The  International journal of Research welfare society(IJRWS) focuses on publishing high-quality, peer-reviewed research that advances knowledge across a broad spectrum of scientific and interdisciplinary fields. The journal welcomes original articles, reviews, case studies, and brief reports that demonstrate innovation, relevance, and scientific integrity. Areas of interest include, but are not limited to, life sciences, health and pharmaceutical sciences, environmental studies, engineering, biotechnology, bioinformatics, public health, and management sciences. IJSRI encourages contributions that promote academic excellence, practical impact, and global scientific dialogue.            </p>
          </div>

          {/* PREPARATION OF MANUSCRIPT */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">PREPARATION OF MANUSCRIPT</h2>
            <p className="mb-2">
The language of presentation for all papers is English. Please type each manuscript single-spaced on A4 paper (8.5" x 11") with 1-inch margins to maintain uniformity and readability. Title, Abstract, Keywords, Introduction, Materials and Methods, Results, Discussion, Conclusion, Acknowledgment, and References should be the order in which the manuscript is arranged. Following this approach will help your paper's information flow logically and clearly.            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><b>Title, Abstract, Keywords, Introduction, Materials and Methods, Results, Discussion, Conclusion, Acknowledgments, and References</b> should be in this order.</li>
            </ul>
          </div>

          {/* (A) Original Research Articles */}
          <div className="text-justify">
            <h3 className="text-xl font-bold text-orange-400 mt-4 mb-2">(A) Original Research Articles</h3>
            <ol className="list-decimal list-inside space-y-3">
              <li><b>Covering Letter:</b> In addition to the general details (name, address, contact details including mobile number of the corresponding author), it should mention in brief what is already known about this subject and what new is added by the submitted work.</li>
              <li><b>Title Page:</b> Essential information should be clearly given on the title page. The title of the document ought to be written in bold, title case, and with a font size of 14. The authors' names should be in uppercase, regular face, and font size 12. The affiliations of the writers should be listed in lowercase, regular face. An asterisk should be used to denote the corresponding author. The title need to be brief and appropriately convey the essence of the work being conveyed. Initials and surnames should be used when listing authors. Please include the words "*Address for Correspondence" and a working email address in the lower left corner of the title page. The address of the corresponding author should be noted separately if it deviates from the affiliations already given. We can guarantee the manuscript's information is communicated clearly and effectively by following certain formatting requirements. Please make sure the title page is prepared accurately and completely.</li>
              <li><b>Abstract:</b>  In addition to the written abstract, a graphical abstract may be required to visually represent the core findings or methodology of the study, providing readers with a quick and intuitive understanding of the research. The abstract must begin on a new page and be typed in single-space format to distinguish it from the introduction. Since many databases only list abstracts, it is particularly crucial as it provides a succinct synopsis of the study. A concise summary of all the important facets of the research should be included in the abstract, which should be between 150 and 250 words long. Creating a thorough abstract enables readers to rapidly understand the manuscript's main ideas.</li>
              <li><b>Keywords:</b> Please add four to six pertinent keywords after the abstract. The primary concepts or subjects covered in the essay should be appropriately represented by these keywords. Selecting relevant keywords makes it easier for the article to be effectively indexed and searched, making it simple for readers to find and get the information they're looking for.</li>
              <li><b>Introduction:</b> It ought to begin on a fresh page. In essence, this section has to present the topic and provide a brief explanation of how the study idea came to be. Provide a brief overview of the study's history. Provide the most recent research that directly affects the topic rather than conducting a thorough literature study. Research aims and objectives must be justified in a clear and unambiguous manner. The study's goal ought to be mentioned in the conclusion. Furthermore, explicitly outline the research's objectives, emphasizing the precise goals and objectives that the study seeks to accomplish. Readers can understand the goal and inspiration of the research by reading an introduction that is straightforward and concise.

</li>
              <li><b>Materials and Methods:</b>  The materials and methods (the way the work was done) should be covered in this section. The chosen method should be explained in enough detail to enable readers to interpret and, if they so want, repeat the experiment. The section must include information about the number of individuals, the number of groups, the study design, the sources of medications with dosing instructions or tools utilized, statistical techniques, and ethical considerations. A description of the data collection process is required. It would be sufficient to provide a previously published reference if the practice is widely used. It is preferable to give a brief description of a procedure that is not widely recognized, even if it has been published before. . Give explicit descriptions of modifications or new methods so that the readers can judge their accuracy, reproducibility and reliability. </li>
              <li><b>Results and Discussion:</b> The accomplishment of the goals outlined in the introduction should be the main emphasis of this section. It should include the results that are displayed as figures, tables, and pictures.</li>
              <li><b>Conclusion:</b>This section is not mandatory but can be added to the manuscript if the discussion is unusually long or complex. summarize the main findings and their significance without repeating the abstract.</li>
              <li><b>References:</b> Only Vancouver-style references are allowed. Instead of being numbered alphabetically, they should be numbered consecutively according to when they are first mentioned in the text. Superscript Arabic numerals should be used to identify in-text citations and references cited in tables and legends. References that are only cited in tables or figure legends should be numbered in the order determined by when they were first mentioned in the table or figure's text. Throughout the manuscript, this constant numbering scheme guarantees proper referencing and preserves clarity. </li>
            </ol>
          </div>

          {/* (B) Review Articles */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mt-4 mb-2">(B) Review Articles</h3>
            <p>
Review articles serve as critical syntheses of existing knowledge on a defined subject area, offering readers a coherent, comprehensive, and balanced overview of current trends, significant developments, and emerging directions in the field. Submissions are expected to be well-structured, analytical, and enriched with relevant visual and conceptual aids that enhance clarity and engagement.
<br></br>
Submission Components
All review article submissions must include the following elements:
<br></br>
Cover Letter
A formal letter addressed to the Editor, outlining the scope, significance, and novelty of the review, along with any pertinent author background or declarations.
<br></br>
Title Page
This should include:
<br></br>
The full title of the manuscript
<br></br>
Full names and institutional affiliations of all contributing authors
<br></br>
Designation of the corresponding author, with complete contact information
<br></br>
Abstract (Summary)
A succinct, non-structured abstract (approximately 200–300 words) summarizing the core objectives, main themes, and overall contribution of the review.
<br></br>
Keywords
Include 4–6 keywords that accurately reflect the content and scope of the review for indexing and discoverability purposes.
<br></br>
Manuscript Structure
Manuscripts should be organized under appropriate and clearly labeled subheadings. Authors are encouraged to present content in a logical and engaging manner, incorporating critical analysis and synthesis throughout. A typical structure may include:
<br></br>
Introduction
<br></br>
Background or Theoretical Context
<br></br>
Core Themes and Discussion
<br></br>
Current Advances and Developments
<br></br>
Challenges, Gaps, and Controversies
<br></br>
Future Perspectives
<br></br>
Conclusion
<br></br>
Use of Visual and Structural Enhancements
To optimize presentation and reader engagement, authors are strongly encouraged to integrate visual and structural elements where appropriate, such as:
<br></br>
Conceptual flowcharts and process diagrams
<br></br>
Highlight boxes for definitions, summaries, or key points
<br></br>
Informative tables and high-quality figures
<br></br>
Illustrative cartoons or schematics, where contextually appropriate
<br></br>
Categories of Review Articles
Review submissions are categorized into two formats, based on scope and depth:
<br></br>
1. Mini-Review
Length: Approximately 7–8 typeset pages
<br></br>
References: Typically up to 50 citations
<br></br>
Scope: A focused, concise examination of a narrowly defined topic or recent advancement
<br></br>
2. Major Review
Length: 15 or more typeset pages
<br></br>
References: Typically exceeding 100 citations
<br></br>
Scope: A comprehensive and in-depth synthesis of a broad, multifaceted topic area
</p>
          </div>

          {/* Figures and Tables */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Figures and Tables</h2>
            <p>
           Includes high quality figures and tables with in the text at appropriate points.Ensure all the figure are at least 300 dpi and tables are simple in design without vertical rules.
            </p>
          </div>
        </div>
      </section>

      <Foot />
    </div>
  );
};

export default InfoAuthors;
