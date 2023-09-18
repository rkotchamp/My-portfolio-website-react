import Projects from "../../components/ProjectsComponents/Projects";

import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPageContainer">
      <div className="headerAndLine">
        <div className="straighLine"></div>
        <h2>Projects</h2>
      </div>
      <Projects />
      <Projects />
    </div>
  );
}

export default ProjectPage;
