import { FaArrowRight } from "react-icons/fa";
import sideLineProjects from "./Publication.constant";
import "./Publication.scss";

const Publication = () => {
  return (
    <div className="publication-container" id="publication">
      <a
        className="read__more"
        href="https://dev.to/ashutoshsarangi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
        <FaArrowRight />
      </a>
      <h2 className="publication-title">Publications</h2>
      <div className="sideline-project-container">
        {sideLineProjects.map((project) => {
          return (
            <a
              className="sideline-project"
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.titleImage} alt="Respective Sideline Profile" />
              <h2 style={{ fontWeight: "450", fontSize: "1.3rem" }}>
                {project.title}
              </h2>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Publication;
