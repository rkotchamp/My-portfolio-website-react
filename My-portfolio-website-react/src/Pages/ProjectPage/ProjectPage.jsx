import Projects from "../../components/ProjectsComponents/Projects";

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
          story="Lambda is a travel plan app where users can be able to share their experience with family and friends and also have a plan of places to be visited"
          projectName="Lambda Travels"
        />
        <Projects />
      </div>
    </div>
  );
}

export default ProjectPage;
