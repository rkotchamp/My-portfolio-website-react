import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        &copy; Reuben Omaano-Tetteh 2023
        <div>
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillMail />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
