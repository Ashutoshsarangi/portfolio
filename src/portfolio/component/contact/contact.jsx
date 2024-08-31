import { useState } from "react";
import { FaMapMarkerAlt, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import ContactIcon from "../contact-icon/contact.icon";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:ashutoshsarangi95@gmail.com?subject=Digital Portfolio Related&body=${message}`;
    window.location.href = mailto;
    setMessage("");
  };
  return (
    <div className="contact-container" id="contact">
      <div className="send-message-container">
        <h2 className="contact-title">Eager to Hear Form you</h2>
        <form className="form-class">
          <textarea
            className="tb-field"
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          ></textarea>
        </form>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
      <div className="get-in-touch-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="message-container">
          Thank you for visiting my portfolio, Have a Nice Day.
        </p>
        <div className="contact-detail">
          <p>
            <FaMapMarkerAlt className="icon" />{" "}
            <span className="bold"> Limassol, Cyprus, Europe </span>
          </p>
          <p>
            <FaMobileAlt className="icon" />{" "}
            <span className="bold"> (+357) 95744640 </span>{" "}
          </p>
          <p>
            <FaRegEnvelope className="icon" />{" "}
            <span className="bold"> ashutoshsarangi95@gmail.com </span>
          </p>
        </div>
        <ContactIcon />
      </div>
    </div>
  );
};

export default Contact;
