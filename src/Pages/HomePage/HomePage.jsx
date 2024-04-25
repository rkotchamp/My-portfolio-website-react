// import TextAndImage from "./Pages/TextAndImage/TextAndImage";
// import NavBar from "./Pages/NavBarPage/NavBar";
// import ProjectPage from "./Pages/ProjectPage/ProjectPage";
// import TechStackPage from "../src/Pages/Tech Stach Page/TechStackPage";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/Footer/Footer";
import TextAndImage from "../TextAndImage/TextAndImage";
import NavBar from "../NavBarPage/NavBar";
import ProjectPage from "../ProjectPage/ProjectPage";
import TechStackPage from "../Tech Stach Page/TechStackPage";
import AboutPage from "../AboutPage/AboutPage";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div className="mainAppContainer">
      {/* <NavBar /> */}
      <TextAndImage />
      <TechStackPage />
      <ProjectPage />
      <AboutPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
