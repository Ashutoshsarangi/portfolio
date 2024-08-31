import { Link, useLocation } from "react-router-dom";
import { FaBars, FaMixer } from "react-icons/fa";
import "./header.css";

const Header = ({ sticky, scrolledSection }) => {
  let location = useLocation();
  console.log(location);
  const menu = [
    { link: "/", name: "Home", key: "111", active: false },
    { link: "/about", name: "About", key: "112", active: false },
    { link: "/project", name: "Projects", key: "113", active: false },
    { link: "/publications", name: "Publications", key: "114", active: false },
    { link: "/contact", name: "Contact", key: "116", active: false },
  ];

  return (
    <header id="header">
      <nav id="navbar" className="navbar ">
        <div>
          <FaBars className="hiddenIcon" />
          <FaMixer className="hiddenIcon" />
          <Link to="/" className="nav__firstChild">
            Portfolio.
          </Link>
        </div>
        <div className="navLinks">
          {menu.map((item) => (
            <Link
              className={`nav-link ${
                location.pathname === item.link && "active"
              }`}
              key={item.key}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
