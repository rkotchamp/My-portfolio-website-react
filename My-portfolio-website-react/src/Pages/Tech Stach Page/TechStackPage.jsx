import javascript from "../../../public/assets/js(1).svg";
import nodejs from "../../../public/assets/nodejs(1).svg";
import express from "../../../public/assets/BASE(1).svg";
import postman from "../../../public/assets/postman(1).svg";
import html from "../../../public/assets/html5(1).svg";
import css from "../../../public/assets/css3(1).svg";
import reactjs from "../../../public/assets/reactjs(1).svg";
import figma from "../../../public/assets/figma(1).svg";
import photoshop from "../../../public/assets/ps(1).svg";
import mysql from "../../../public/assets/mysql(1).svg";

import TechStack from "../../components/Tech stack/TechStack";
import "./TechStackPage.css";

function TechStackPage() {
  return (
    <div className="techStackContainerDiv">
      <TechStack text="javScript" newSrc={javascript} newAlt="javaScript" />
      <TechStack text="Node Js" newSrc={nodejs} newAlt="node js" />
      <TechStack text="Express.js" newSrc={express} newAlt="express" />
      <TechStack text="MySQL" newSrc={mysql} newAlt="mysql" />
      <TechStack text="React" newSrc={reactjs} newAlt="react" />
      <TechStack text="PostMan" newSrc={postman} newAlt="postman" />
      <TechStack text="Html5" newSrc={html} newAlt="html" />
      <TechStack text="CSS3" newSrc={css} newAlt="css" />
      <TechStack text="Figma" newSrc={figma} newAlt="figma" />
      <TechStack text="Photoshop" newSrc={photoshop} newAlt="figma" />
    </div>
  );
}

export default TechStackPage;
