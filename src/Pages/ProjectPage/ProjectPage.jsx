import Projects from "../../components/ProjectsComponents/Projects";
import BRinc from "../../assets/My_Tech_logos/brinc.png";
import reactJs from "../../assets/My_Tech_logos/Group 70.png";
import htmlfile from "../../assets/My_Tech_logos/html5.png";
import cssFile from "../../assets/My_Tech_logos/css.png";
import jsFile from "../../assets/My_Tech_logos/Group 68.png";
import nodeJs from "../../assets/My_Tech_logos/node.png";
import fireBasePng from "../../assets/My_Tech_logos/Firebase.png";
import mySQLPng from "../../assets/My_Tech_logos/Vector.png";
import Lambda from "../../assets/My_Tech_logos/lambdaMain.png";

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
          projectName="Lambda Travels"
          projectOverview={Lambda}
          story="Lambda is travel plan app where users can be able plan trips to their favourites places,write dwon activities to perform there on each day and also get relevant information about the places they are visiting."
          imgSrc1={htmlfile}
          imgSrc2={cssFile}
          imgSrc3={jsFile}
          imgSrc4={reactJs}
          imgSrc5={nodeJs}
          imgSrc6={fireBasePng}
          imgSrc7={mySQLPng}
        />
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
      </div>
    </div>
  );
}

export default ProjectPage;
