import TextAndImage from "./Pages/TextAndImage/TextAndImage";
import NavBar from "./Pages/NavBarPage/NavBar";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import TechStackPage from "../src/Pages/Tech Stach Page/TechStackPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BlogPage from "./Pages/Blogs/BlogPage/BlogPage";
import BlogDetails from "./Pages/Blogs/BlogDetails/BlogDetails";
import "./App.css";

function App() {
  return (
    <div className="mainAppContainer">
      <NavBar />
      {/* <TextAndImage />
      <TechStackPage />
      <ProjectPage />
      <AboutPage />
      <Contact />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="/blogDetails/:id" element={<BlogDetails />} /> */}
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
