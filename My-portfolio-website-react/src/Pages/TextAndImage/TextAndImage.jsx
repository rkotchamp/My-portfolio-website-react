import myImage from "../../../public/assets/reuben42.png";
import "./TextAndImage.css";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function TextAndImage() {
  return (
    <div>
      <div className="text__and__image__container">
        <div className="text">
          <div className="headers">
            <h1 className="firstHeader">
              <span>Omaano-Tetteh</span> Reuben
            </h1>
            <div className="fullstack">
              <div className="straighLine"></div>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          <p>
            I am a full stack developer. I enjoy building things on the internet
            whether it's making websites look cool or making them work behind
            the scenes. Take a look at what I've created so far and let's make
            technology do some awesome stuff together!{" "}
          </p>
          <div className="icons">
            <a href="https://github.com/rkotchamp">
              <AiFillGithub className="social_icons" />
            </a>
            <a href="https://www.linkedin.com/in/reuben-omaano-tetteh/">
              <AiFillLinkedin className="social_icons" />
            </a>
            <a href="mailto:treuben90@yahoo.com">
              <AiFillMail className="social_icons" />
            </a>
          </div>
        </div>
        <div className="image">
          {/* <img src={myImage} alt="My personal picture" /> */}
          <div className="clippy"></div>
        </div>
      </div>
    </div>
  );
}

export default TextAndImage;
