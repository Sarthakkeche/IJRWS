import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import imga from "../assets/about.webp";
import bg3 from "../assets/abg.jpg";
const AboutUsContent = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800" >
               <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 mt-33  px-4 md:px-20 overflow-hidden"
       style={{
  backgroundImage: `linear-gradient( rgba(14, 12, 12, 0.85), rgba(36, 33, 33, 0.85)), url(${bg3})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  backgroundPosition: "center mid 20px",
}}
>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">
            About <span className="text-orange-400">Us</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
            We empower researchers by providing a platform to publish impactful and innovative research across disciplines.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={imga} 
            alt="Research Team"
            className="w-full max-w-md mx-auto"
            data-aos="fade-right"
          />
          {/* data-aos="fade-left" */}
          <div >
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Who We Are</h2>
            <p className="mb-3 text-justify">
The   International journal of Research welfare society (IJRWS) is a leading peer-reviewed, open-access, multidisciplinary Journal of Ideation welfare society dedicated to the publication of high-quality and impactful scholarly works. IJRWS serves as a dynamic global platform for the dissemination of original research, reviews, short communications, case reports, Ethics Forum contributions, Education Forum discussions, and Letters to the Editor.            </p>
            <p className="text-justify">
The journal is committed to advancing scientific knowledge across a wide range of disciplines, including: Life Sciences, Pharmaceutical Sciences, Health Sciences, Clinical and Biomedical Research, Biotechnology, Chemistry, Environmental Science, Bioinformatics, Public Health, Management Sciences, Engineering and Allied Technologies.             </p>
<p className="text-justify">
  IJRWS welcomes submissions from researchers, academicians, professionals, practitioners, and students worldwide. We encourage both empirical and theoretical research papers, literature reviews, conceptual frameworks, simulation models, analytical studies, case reports, and technical notes that demonstrate innovation, relevance, and scholarly excellence.
</p>
<p className="text-justify">
  Our mission is to foster a collaborative and inclusive research culture that bridges gaps between disciplines and supports the global exchange of scientific ideas. We place a strong emphasis on novel insights, timely relevance, and innovative concepts that contribute meaningfully to the academic and professional communities.
</p>
<p className="text-justify">
  By maintaining rigorous peer-review standards and ensuring open accessibility, IJRWS aspires to be a trusted resource for high-quality research and a catalyst for scientific advancement across disciplines.
</p >
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-white px-4 md:px-20">
        <div className="text-center mb-12" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-orange-500">Focus and Scope</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md" data-aos="fade-up-right">
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Primary Aim </h3>
            <p className="text-justify"> 
The   International journal of Research welfare society (IJRWS) aims to advance scientific knowledge by publishing high-quality, peer-reviewed, open-access research across a broad range of disciplines. It promotes global collaboration, interdisciplinary dialogue, and innovation by welcoming contributions from researchers, professionals, and students worldwide. IJRWS strives to be a trusted platform for impactful research that supports academic excellence and meaningful scientific exchange.            </p>
          </div>
          <div className="p-6 bg-orange-100 rounded-lg shadow-md" data-aos="fade-up-left">
            <h3 className="text-xl font-semibold mb-2 text-orange-900">Focus and Scope</h3>
            <p className="text-justify">
The   International journal of Research welfare society (IJRWS) focuses on publishing high-quality, peer-reviewed research that advances knowledge across a broad spectrum of scientific and interdisciplinary fields. The journal welcomes original articles, reviews, case studies, and brief reports that demonstrate innovation, relevance, and scientific integrity. Areas of interest include, but are not limited to, life sciences, health and pharmaceutical sciences, environmental studies, engineering, biotechnology, bioinformatics, public health, and management sciences. IJRWS encourages contributions that promote academic excellence, practical impact, and global scientific dialogue.            </p>
          </div>
        </div>
      </section>

      {/* Why Publish With Us */}
   
      <section className="py-16 px-4 md:px-20 bg-blue-50">
  <div className="text-center mb-12" data-aos="fade-down">
    <h2 className="text-3xl font-bold text-orange-500">
      Why Choose IJRWS for Your Research
    </h2>
  </div>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: 'Transparent & Rigorous Peer Review',
        desc: 'At IJRWS, every manuscript undergoes a meticulous and unbiased peer-review process conducted by experienced scholars. This ensures that only high-quality, original, and impactful research is accepted. Our commitment to academic integrity and thorough evaluations maintains the credibility and excellence of each publication.',
        icon: '🔍',
      },
      {
        title: 'Global Visibility with Open Access',
        desc: 'Publishing with IJRWS guarantees that your work is freely accessible to researchers, educators, and institutions around the world. Our open-access model removes paywall barriers, increasing the readership, citation potential, and cross-disciplinary impact of your research. Your findings reach a wider audience—instantly and without restrictions.',
        icon: '🌐',
      },
      {
        title: 'Collaborative & Recognized Research Community',
        desc: 'IJRWS is more than just a journal—it is a dynamic hub of collaboration. Authors benefit from increased academic recognition, opportunities for global partnerships, and the chance to engage with a diverse community of researchers and professionals. Publishing with IJRWS adds credibility to your profile and helps you grow in your academic career.',
        icon: '🤝',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed text-justify">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


     
    <section className="py-16 px-4 md:px-20 bg-white">
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-orange-500">Ethics & Guidelines</h2>
    <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-justify" >
      The International journal of Research welfare society(IJRWS) is committed to upholding the highest standards of ethical publishing, guided by the COPE framework. Every submission is evaluated with transparency, fairness, and academic rigor.
    </p>
  </div>

  <div className="max-w-5xl mx-auto space-y-8 text-gray-700 text-sm leading-relaxed" data-aos="fade-up">
    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">1. Ethical Standards and Publishing Integrity</h3>
      <p className="text-justify">
        IJRWS adheres to strict ethical policies at every stage of the publishing process. Our editorial decisions are transparent, fair, and aligned with the Committee on Publication Ethics (COPE) best practices.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">2. Originality and Intellectual Property</h3>
      <p className="text-justify">
        Manuscripts must be the authors’ original work, free from plagiarism or duplication. All submissions are checked using advanced plagiarism detection tools before review to ensure content authenticity and protect intellectual property rights.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">3. Authorship Responsibility</h3>
      <p className="text-justify">
        Authorship is limited to individuals who have made substantial contributions to the research and have approved the final version of the manuscript. Ghost, honorary, or guest authorship is strictly prohibited to maintain accountability.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">4. Disclosure of Conflicts of Interest</h3>
      <p className="text-justify">
        All authors, reviewers, and editors must disclose any potential conflicts that could influence their work. Any financial or personal relationships must be transparently stated in published articles to maintain reader trust.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">5. Double-Blind Peer Review</h3>
      <p className="text-justify">
        IJRWS follows a double-blind peer review process where both authors and reviewers remain anonymous. This ensures unbiased evaluation based solely on scientific merit and relevance. Editors avoid reviewing papers with which they have conflicts.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">6. Ethical Compliance in Research</h3>
      <p className="text-justify">
        Research involving human participants or animals must have institutional ethics approval. Human studies require documented informed consent, and strict data privacy and confidentiality standards are enforced for all types of research.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">7. Data Sharing and Transparency</h3>
      <p className="text-justify">
        Authors are encouraged to include data availability statements and share underlying research data to promote reproducibility and enable further scholarly inquiry. Supporting datasets may be made available upon request or via repositories.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">8. Copyright & Licensing</h3>
      <p className="text-justify">
        Authors retain copyright of their manuscripts while granting IJRWS the right to first publication. All articles are licensed under Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA), supporting open and ethical reuse.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">9. Post-Publication Review & Corrections</h3>
      <p className="text-justify">
        IJRWS supports post-publication discussions and encourages readers to report concerns. If significant issues arise, the journal will issue corrections, retractions, or editorial notes to preserve the integrity of the scientific record.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">10. Complaint and Appeal Procedures</h3>
      <p className="text-justify">
        Authors and readers can report grievances related to the editorial process, reviewer behavior, or ethical violations. The Editor-in-Chief reviews all cases confidentially and fairly, guided by COPE’s recommended procedures.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 text-base mb-1">11. Avoidance of Predatory Practices</h3>
      <p className="text-justify">
        IJRWS does not collaborate with unauthorized third-party agencies or guarantee publication. All official communications, submissions, and payments must be made directly through the journal’s verified channels with no hidden fees.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-4 md:px-20 bg-blue-50">
  <div className="text-center mb-12" data-aos="fade-down">
    <h2 className="text-3xl font-bold text-orange-500">Our Commitment to Research Excellence</h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-sm leading-relaxed text-justify">
      At the  International journal of Research welfare society(IJRWS), we believe advancing knowledge requires more than publication—it demands integrity, quality, and vision. Our platform brings together diverse scientific minds to share impactful discoveries and scholarly insights.
    </p>
  </div>

  <div className="max-w-5xl mx-auto space-y-10 text-gray-800 text-sm leading-relaxed" data-aos="fade-up">
    <div>
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Rigorous Editorial Review</h3>
      <p className="text-justify">
        Every manuscript submitted to IJRWS is evaluated by qualified reviewers and subject-matter experts. We ensure contributions are original, authentic, and relevant, strengthening the global body of scientific knowledge through thorough, fair, and timely assessments.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Scholarly Integrity & Transparency</h3>
      <p className="text-justify">
        We foster a culture of transparency and academic honesty. Editorial decisions are grounded in scholarly merit, not commercial influence. Our commitment to ethical practices ensures that authors, reviewers, and editors maintain the highest level of accountability.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Empowering Global Collaboration</h3>
      <p className="text-justify">
        IJRWS serves as a global hub for interdisciplinary research. By publishing with us, scholars enhance their visibility, build academic credibility, and contribute to innovation that transcends borders. We support our authors throughout the peer-review and publishing journey.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Impact and Innovation</h3>
      <p className="text-justify">
        Our vision goes beyond publication—we aim to shape the future of science. Research published in IJRWS promotes practical applications, policy advancements, and technological innovations that drive scientific and societal progress.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-4 md:px-20 bg-white">
  <div className="text-center mb-12" data-aos="fade-down">
    <h2 className="text-3xl font-bold text-orange-500">Privacy Statement</h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-sm leading-relaxed text-justify">
      Your privacy is of utmost importance to us. IJRWS is committed to maintaining full confidentiality of any personal information collected through our platform.
    </p>
  </div>

  <div className="max-w-5xl mx-auto text-sm text-gray-800 leading-relaxed space-y-6" data-aos="fade-up">
    <div>
      <h3 className="font-semibold text-blue-700 mb-1">Purpose of Data Collection</h3>
      <p className="text-justify">
        Personal data such as names, email addresses, and institutional affiliations are collected solely for editorial and publication-related purposes, including correspondence and peer review.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 mb-1">Data Usage & Confidentiality</h3>
      <p className="text-justify">
        Collected information is stored securely and used exclusively within the scope of IJRWS’s journal operations. Under no circumstances is your information shared with third parties or used for commercial or unauthorized activities.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-blue-700 mb-1">Legal Compliance & Security</h3>
      <p className="text-justify">
        IJRWS adheres to all applicable data protection regulations. We implement strict security protocols to safeguard personal data and ensure users’ rights are respected in accordance with international standards.
      </p>
    </div>
  </div>
</section>


      <Footer/>
    </div>
  );
};

export default AboutUsContent;
