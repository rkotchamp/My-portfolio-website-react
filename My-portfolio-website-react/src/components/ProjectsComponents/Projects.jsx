import reactLogo from "../../assets/My_Tech_logos/Group 70.png";
import { useInView } from "react-intersection-observer";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import "./Project.css";

function Projects({
  projectName,
  story,
  imgSrc,
  projectOverview,
  liveSite,
  goGitHub,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
}) {
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
              <img src={imgSrc1} alt="html" />
              <img src={imgSrc2} alt="css" />
              <img src={imgSrc3} alt="JavaScript" />
              <img src={imgSrc4} alt="react.js" />
            </div>
          </div>
          <p>{story}</p>
          <div className="gitAndSite">
            <a href={goGitHub}>
              <button className="btn">
                Code <AiFillGithub />
              </button>
            </a>
            <a href={liveSite}>
              <button className="btn">
                Live <AiOutlineLink />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
