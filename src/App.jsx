import TextAndImage from "./Pages/TextAndImage/TextAndImage";
import NavBar from "./Pages/NavBarPage/NavBar";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import TechStackPage from "../src/Pages/Tech Stach Page/TechStackPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="mainAppContainer">
      <NavBar />
      <TextAndImage />
      <TechStackPage />
      <ProjectPage />
      <AboutPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
