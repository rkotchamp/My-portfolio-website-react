import TextAndImage from "./Pages/TextAndImage/TextAndImage";
import NavBar from "./Pages/NavBarPage/NavBar";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import TechStackPage from "../src/Pages/Tech Stach Page/TechStackPage";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <TextAndImage />
      <TechStackPage />
      <ProjectPage />
    </div>
  );
}

export default App;
