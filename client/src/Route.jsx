import { useRoutes } from "react-router-dom";
import Home from './Components/Home';
import AboutUsContent from "./Components/About";
import ContactUsContent  from "./Components/ContactUs";
import EditorialBoard from "./Components/Eboard";
import GuidelinesContent from "./Components/AuthorGuidelines";
import InfoAuthors from "./Components/InfoAuthor";
import ArchivePage from "./Components/Archive";
import CurrentIssuePage from "./Components/Issue";
import PaperPage from "./Components/PagePaper";
import SubmitManuscriptPage from "./Components/Submit";
import CheckStatusPage from "./Components/Status";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path:"/about", element:<AboutUsContent/>},
    { path:"/contact",element:<ContactUsContent/>},
    {path:"/Eboard",element:<EditorialBoard/>},
    {
      path:"/subguide",element:<GuidelinesContent/>
    },
    {
      path:"/submit" , element:<SubmitManuscriptPage/>
    },
    {
      path:"/status" , element:<CheckStatusPage/>
    },
    {
      path:"/InfoAuthors",element:<InfoAuthors/>
    },
    {path:"/archive" , element:<ArchivePage/>},
    {path:"/currentpage" , element:<CurrentIssuePage/>
    },
    {path:"/paper/:issueId" , element:<PaperPage/>},
    
    

  ]);
};

export default RoutesConfig;

