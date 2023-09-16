import reactjs from "../../../public/assets/reactjs(1).svg";
import "./Project.css";

function Projects() {
  return (
    <div>
      <div className="projectContainer">
        <div className="imge__div"></div>
        <div className="content">
          <div className="projectHeaders">
            <h4>Project Name</h4>
            <div className="projectIcons">
              <img src={reactjs} alt="react" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            veritatis repudiandae eligendi expedita inventore eius nobis quam
            adipisci quaerat. Explicabo?
          </p>
          <div className="gitAndSite">
            <button>Code</button>
            <button>Live</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
