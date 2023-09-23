import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        Reuben Omaano-Tetteh &copy; 2023
        <div className="footerIcons">
          <a href="https://github.com/rkotchamp">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/reuben-omaano-tetteh/">
            {" "}
            <AiFillLinkedin />
          </a>

          <a href="mailto:treuben90@yahoo.com">
            <AiFillMail />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
