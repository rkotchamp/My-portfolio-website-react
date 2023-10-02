import javascript from "../../assets/My_Tech_logos/Group 68.png";
import nodejs from "../../assets/My_Tech_logos/node.png";
import express from "../../assets/My_Tech_logos/express.png";
import postman from "../../assets/My_Tech_logos/postman.png";
import html from "../../assets/My_Tech_logos/html5.png";
import css from "../../assets/My_Tech_logos/css.png";
import reactLogo from "../../assets/My_Tech_logos/Group 70.png";
import figma from "../../assets/My_Tech_logos/figma.png";
import photoshop from "../../assets/My_Tech_logos/ps.png";
import mysql from "../../assets/My_Tech_logos/Vector.png";
import git from "../../assets/My_Tech_logos/git.png";
import fireBase from "../../assets/My_Tech_logos/Firebase.png";

import TechStack from "../../components/Tech stack/TechStack";
import "./TechStackPage.css";

function TechStackPage() {
  return (
    <div className="techStackContainerDiv">
      <div className="headerAndLine">
        <div className="straighLine"></div>
        <h2>Tech Stack</h2>
      </div>
      <div className="stacks">
        <TechStack text="javScript" newSrc={javascript} newAlt="javaScript" />
        <TechStack text="Node Js" newSrc={nodejs} newAlt="node js" />
        <TechStack text="Express.js" newSrc={express} newAlt="express" />
        <TechStack text="MySQL" newSrc={mysql} newAlt="mysql" />
        <TechStack text="React" newSrc={reactLogo} newAlt="react" />
        <TechStack text="PostMan" newSrc={postman} newAlt="postman" />
        <TechStack text="Html5" newSrc={html} newAlt="html" />
        <TechStack text="CSS3" newSrc={css} newAlt="css" />
        <TechStack text="Figma" newSrc={figma} newAlt="figma" />
        <TechStack text="Photoshop" newSrc={photoshop} newAlt="figma" />
        <TechStack text="Git" newSrc={git} newAlt="Git" />
        <TechStack text="fireBase" newSrc={fireBase} newAlt="fireBase" />
      </div>
    </div>
  );
}

export default TechStackPage;
