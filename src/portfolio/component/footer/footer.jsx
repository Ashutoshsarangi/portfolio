import { FaHeart } from "react-icons/fa";

import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <span>
        Made With <FaHeart style={{ color: "red" }} /> By <b>Ashu</b>
      </span>
    </div>
  );
};

export default Footer;
