const projectsList = require("../projects.json");

const Projects = () => {
  return (
    <div className="text-center mt-20 mb-10" id="projects">
      <h1 className="font-sans text-6xl max-[600px]:text-4xl hover:underline hover:decoration-red-500">
        Projects
      </h1>
      {projectsList.projects.map((x, index) => {
        return (
          <div
            className="text-center mb-4 mt-20 hover:animate-pulse"
            key={index}
          >
            <div className="text-center">
              <a className="text-4xl" href={x.URL} target="_blank">
                {x.name}
              </a>
              <p>{x.stack}</p>
              <p>{x.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
