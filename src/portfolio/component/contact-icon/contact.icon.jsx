import {
  FaLinkedin,
  FaHackerrank,
  FaGithubSquare,
  FaDev,
} from "react-icons/fa";

import "./contact.icon.scss";
const ContactIcon = () => {
  return (
    <div>
      <a
        className="contact-icon"
        href="https://www.linkedin.com/in/ashutosh-sarangi-4a220a138/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="icons" />
      </a>
      <a
        className="contact-icon"
        href="https://www.hackerrank.com/LIPUNI"
        target="_blank"
        rel="noreferrer"
      >
        <FaHackerrank className="icons" />
      </a>
      <a
        className="contact-icon"
        href="https://github.com/Ashutoshsarangi"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare className="icons" />
      </a>
      <a
        className="contact-icon"
        href="https://dev.to/ashutoshsarangi"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev className="icons" />
      </a>
    </div>
  );
};

export default ContactIcon;
