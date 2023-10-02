import Projects from "../../components/ProjectsComponents/Projects";
import BRinc from "../../assets/My_Tech_logos/Screenshot 2023-09-26 at 4.58.29 AM.png";
import reactJs from "../../assets/My_Tech_logos/Group 70.png";
import htmlfile from "../../assets/My_Tech_logos/html5.png";
import cssFile from "../../assets/My_Tech_logos/css.png";
import jsFile from "../../assets/My_Tech_logos/Group 68.png";

import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPageContainer" id="projects">
      <div className="headerAndLine">
        <div className="verticalLine"></div>
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <Projects
          story="There are so many trees being fell down for manufacturing books and even shelves to store books. Upon realisation we decided to create this online library where books can be read and also rented all reducing deforestation and improving our ecosystem at large"
          projectName="BRinc Library"
          projectOverview={BRinc}
          imgSrc1={htmlfile}
          imgSrc2={cssFile}
          imgSrc3={jsFile}
          imgSrc4={reactJs}
          goGitHub="https://github.com/BRinc-lda/BRinc"
        />
        <Projects />
      </div>
    </div>
  );
}

export default ProjectPage;
