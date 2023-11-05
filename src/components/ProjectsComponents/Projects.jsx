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
  imgSrc5,
  imgSrc6,
  imgSrc7,
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
              <img src={imgSrc1 ? imgSrc1 : null} alt="html" />
              <img src={imgSrc2 ? imgSrc2 : null} alt="css" />
              <img src={imgSrc3 ? imgSrc3 : null} alt="JavaScript" />
              <img src={imgSrc4 ? imgSrc4 : null} alt="react.js" />
              <img src={imgSrc5 ? imgSrc5 : null} alt="" />
              <img src={imgSrc6 ? imgSrc6 : null} alt="" />
              <img src={imgSrc7 ? imgSrc7 : null} alt="" />
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
