import myImage from "../../../public/assets/reuben42.png";
import "./TextAndImage.css";

function TextAndImage() {
  return (
    <div>
      <div className="text__and__image__container">
        <div className="text">
          <h1>
            <span>Omaano-Tetteh</span> Reuben
          </h1>
          <p>
            I am a full stack developer. I enjoy building things on the internet
            whether it's making websites look cool or making them work behind
            the scenes. Take a look at what I've created so far and let's make
            technology do some awesome stuff together!{" "}
          </p>
        </div>
        <div className="image">
          <img src={myImage} alt="My personal picture" />
          <div className="clippy"></div>
        </div>
      </div>
    </div>
  );
}

export default TextAndImage;
