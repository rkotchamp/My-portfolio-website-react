import AboutMe from "../../components/AboutMe/AboutMe";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutPageContainer" id="about">
      <div className="aboutPageHeaderAndLine">
        <div className="verticalLine"></div>
        <h2>About Me</h2>
      </div>
      <AboutMe />
    </div>
  );
}

export default AboutPage;
