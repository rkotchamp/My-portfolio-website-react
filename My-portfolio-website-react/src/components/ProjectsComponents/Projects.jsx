import reactLogo from "../../assets/My_Tech_logos/Group 70.png";
import { useInView } from "react-intersection-observer";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import "./Project.css";

function Projects({ projectName, story, imgSrc, projectOverview }) {
  const [ref, inView] = useInView();
  return (
    <div>
      <div
        className={`projectContainer ${inView ? "projectAnimate " : null}`}
        ref={ref}
      >
        <div className="img__div">
          <img src={projectOverview} alt="" />
        </div>
        <div className="content">
          <div className="projectHeaders">
            <h4>{projectName}</h4>
            <div className="projectIcons">
              <img src={imgSrc} alt="react" />
            </div>
          </div>
          <p>{story}</p>
          <div className="gitAndSite">
            <button className="btn">
              Code <AiFillGithub />
            </button>
            <button className="btn">
              Live <AiOutlineLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
