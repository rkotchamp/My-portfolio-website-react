import { useEffect } from "react";
import "./AboutMe.css";

function AboutMe() {
  const currentAge = () => {
    const birthYear = 1995;
    const newYear = new Date().getFullYear();
    const newAge = newYear - birthYear;
    return newAge;
  };
  const age = currentAge();

  return (
    <div className="aboutMeContainer">
      <p className="longText">
        I have been working intensively on web development over a year.I have
        experience with variety of technologies like React, JavaScript,
        Node.js,Express.js, Git and Github. I am currently sharpening my skills
        in the aforementioned tools and working on{" "}
        <span>my latest project</span>, which will aim at helping regimental
        institution work and share confidential information pertaining to their
        line of work making it difficult for the civilian(general public)
        access. <br />
        Can I do everything ? Far from it. But I have more than 7 years of
        experience working as a SWAT Officer and graphic design freelance and if
        you are looking for an addition to your team with the potential for
        rapid growth and the ability to constantly learn, please do not hesitate
        to contact me.{" "}
      </p>
      <div className="infoSection">
        <div className="personalInfo">
          <p>Name:</p>
          <p>Reuben Omaano-Tetteh</p>
        </div>
        <div className="personalInfo">
          <p>Age:</p>
          <p>{age} years old</p>
        </div>
        <div className="personalInfo">
          <p>Location:</p>
          <p>Brasov, Romania</p>
        </div>
        <div className="personalInfo">
          <p>Languages:</p>
          <div>
            <p>
              English <span>Native Speaker</span>
            </p>
            <p>
              Romanian <span>B1 Level</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
