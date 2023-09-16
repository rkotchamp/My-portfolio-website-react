import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="nav__container">
        <div className="logo">
          Rkot<span>.</span>
        </div>
        <nav>
          <ul className="unorderedList">
            <li>Home </li>
            <li>Projects</li>
            <li>Articles</li>
            <li>Contacts </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
