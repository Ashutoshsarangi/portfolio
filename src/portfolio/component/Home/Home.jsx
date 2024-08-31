import Typed from "react-typed";
import Dp1 from "../../images/Dp1.jpeg";
import ContactIcon from "../contact-icon/contact.icon";
import "react-typed/dist/animatedCursor.css";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home-container" id="home">
        <div>
          <h1 className="title"> I'm Ashutosh</h1>
          <Typed
            strings={["A Developer |", "A Mentor |", "A Student (Always) |"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input type="text" className="sub-title" disabled />
          </Typed>
        </div>
        <div className="dp__handler">
          <img src={Dp1} alt="my Profile" className="about-dp" />
          <ContactIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
