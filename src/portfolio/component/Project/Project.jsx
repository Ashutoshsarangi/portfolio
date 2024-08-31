import { FaDownload } from "react-icons/fa";
import myResume from "../../resume/Ashutosh_Sarangi_React_8_YOE.docx.pdf";
import "./Project.scss";
const Project = () => {
  return (
    <div className="project-container" id="project">
      <h2 className="project-title"> Key Projects</h2>
      <a
        className="download-resume"
        href={myResume}
        download="Ashutosh_React_8"
      >
        <FaDownload /> Download Resume
      </a>
      <div className="project-container">
        <div className="project">
          <h4 className="project-title">
            Phoenix — (React, Typescript, Redux)
          </h4>
          <p>
            <span className="span__types">Summary: </span>
            Developed and optimized a B2B product for marketers, handling 5
            million GE data records with a 30% load time reduction. Key
            contributions include introducing Git-like Conflict Resolution,
            implementing ABAC for enhanced security, improving scalability, and
            leading efforts in TDD, resulting in 85%+ SonarQube coverage and
            reduced bugs by 20%.
          </p>
        </div>
        <div className="project">
          <h4 className="project-title">Dabadu — (React, Typescript, Redux)</h4>
          <p>
            <span className="span__types">Summary: </span>
            Led a team in optimizing Dabadu, a platform streamlining car
            dealership operations. Refactored 2000 lines of legacy code to 700,
            boosting performance by 35%.
          </p>
          <p>
            Introduced custom hooks, state management enhancements, and dynamic
            component rendering. Improved code reliability with Jest and Sinon,
            reducing post-deployment issues by 25%, enhancing scalability and
            user experience.
          </p>
        </div>
        <div className="project">
          <h4 className="project-title">
            Genius Application — (React, Javascript, Redux)
          </h4>
          <p>
            <span className="span__types">Summary: </span>
            Led a team in developing a web application for building custom CRMs
            with drag-and-drop features. Managed complex HTML implementations,
            optimized performance with a 30% reduction in rendering times, and
            enhanced user satisfaction by 25%. Oversaw development, debugging,
            and project management, resulting in a 20% decrease in
            post-deployment issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
