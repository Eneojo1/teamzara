import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [active, setActive] = useState("Home");

  const handleSetActive = (section) => {
    setActive(section);
  };
  return (
    <nav>
      <img src={require("../assets/logo.jpg")} alt="" className="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>
      <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
        {sections.map((s) => (
          <li className="tab">
            <Link
              className={active === `${s.name}` ? "active-tab" : "link"}
              to={`${s.name}`}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={() => handleSetActive(s.name)}
              onClick={toggleMenu}
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
