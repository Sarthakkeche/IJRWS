import { useRoutes } from "react-router-dom";
import VolumeManagement from "./Volume.jsx";
import IssueManagement from "./Issue.jsx";
import PaperManagement from "./Paper.jsx";
import AdminPanel from "./Admin.jsx";
import PendingManuscripts from "./Pending.jsx";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <AdminPanel /> },
    { path: "/volume", element: <VolumeManagement /> },
    { path: "/issue/:id", element: <IssueManagement /> },
    { path: "/paper/:id", element: <PaperManagement /> },
    {path:"/Pending" , element:<PendingManuscripts/>},
  ]);
};

export default RoutesConfig;
