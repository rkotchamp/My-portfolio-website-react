import { AiOutlineMenu } from "react-icons/ai";
import "./NavBar.css";
import { useState } from "react";

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
            <li>Home </li>
            <li>Projects</li>
            <li>Articles</li>
            <li>Contacts </li>
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
