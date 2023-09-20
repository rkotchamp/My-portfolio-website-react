import Projects from "../../components/ProjectsComponents/Projects";

import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPageContainer">
      <div className="headerAndLine">
        <div className="verticalLine"></div>
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <Projects />
        <Projects />
      </div>
    </div>
  );
}

export default ProjectPage;
