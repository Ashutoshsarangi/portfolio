import Description from "./component/description";
import Intro from "./component/intro";
import Skill from "./component/skill";
import "./about.scss";

const About = () => {
  return (
    <div className="about-container" id="about">
      <Description />
      <div className="skill-section">
        <Skill />
      </div>
    </div>
  );
};

export default About;
