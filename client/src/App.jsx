import './App.css'
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./Route.jsx";
import ScrollToTop from "./ScrollToTop";

function App() {
 
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <RoutesConfig />
    </BrowserRouter>
    </>
  )
}

export default App

