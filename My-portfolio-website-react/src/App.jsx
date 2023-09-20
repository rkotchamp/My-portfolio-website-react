import TextAndImage from "./Pages/TextAndImage/TextAndImage";
import NavBar from "./Pages/NavBarPage/NavBar";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import TechStackPage from "../src/Pages/Tech Stach Page/TechStackPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <TextAndImage />
      <TechStackPage />
      <ProjectPage />
      <AboutPage />
    </div>
  );
}

export default App;
