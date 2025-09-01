import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu w-[50%]">
      <ul className="menu-list flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
