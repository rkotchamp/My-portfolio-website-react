import reactjs from "../../../public/assets/reactjs(1).svg";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import "./Project.css";

function Projects() {
  return (
    <div>
      <div className="projectContainer">
        <div className="img__div"></div>
        <div className="content">
          <div className="projectHeaders">
            <h4>Project Name</h4>
            <div className="projectIcons">
              <img src={reactjs} alt="react" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amen consectetur adipisicing eliz. Amen
            veritas repudiate exigence expedited invertor pius Mobis quam
            adiposis quasar. Explicator?
          </p>
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
