import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    address: false,
    email: false,
    phone: false,
  });

  const handleToggle = (section) => {
    setIsOpen((prev) => ({
      address: section === "address" ? !prev.address : false,
      email: section === "email" ? !prev.email : false,
      phone: section === "phone" ? !prev.phone : false,
    }));
  };

  return (
    <footer className="footer">
      <ul className="contacts">
        <li onClick={() => handleToggle("address")}>
          <FaLocationDot /> <p>Address</p>
        </li>
        <li onClick={() => handleToggle("email")}>
          <MdEmail /> <p>Email</p>
        </li>
        <li onClick={() => handleToggle("phone")}>
          <IoIosCall /> <p>Pone</p>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <ul className="copy-right">
        <li>
          <p>&copy; 2024 TeamZara Limited. All rights reserved.</p>
        </li>
      </ul>

      <div className={`contact-items ${isOpen.email ? "show" : ""}`}>
        <p>
          <a href="mailto:info@teamzara.co.uk">
            <MdEmail /> info@teamzara.co.uk
          </a>
        </p>
        <p>
          <a href="mailto:timothy@teamzara.co.uk">
            <MdEmail /> timothy@teamzara.co.uk
          </a>
        </p>
      </div>
      <div className={`contact-items ${isOpen.phone ? "show" : ""}`}>
        <p>
          <TbDeviceLandlinePhone /> +441793631182
        </p>
        <p>
          <IoIosCall /> +447943862280
        </p>
      </div>
      <div className={`contact-items ${isOpen.address ? "show" : ""}`}>
        <p>6 Butleigh Road</p>
        <p>SN25 2AA</p>
      </div>
    </footer>
  );
};

export default Footer;
