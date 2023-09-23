import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";

function NavBar() {
  const [bars, setBars] = useState(false);

  const toggleClick = () => {
    setBars(!bars);
  };
  return (
    <div>
      <div className="nav__container">
        <div className="logo">
          Rkot<span>.</span>
        </div>
        <nav>
          <ul className={`unorderedList ${bars ? "notShow" : null}`}>
            <Link to="#home">
              <li>Home </li>
            </Link>
            <Link to="#projects">
              <li>Projects</li>
            </Link>
            <Link to="#contacts">
              <li>Contacts</li>
            </Link>
            <Link to="#about">
              <li>About me</li>
            </Link>
          </ul>
        </nav>
        <div className="burger">
          <AiOutlineMenu
            onClick={toggleClick}
            className={bars ? "rotate" : null}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
