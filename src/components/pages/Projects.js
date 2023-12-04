import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Pawfinder",
    image: "./images/paw-finder-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/delgadodevelops/Pawfinder-Project",
    github: "https://github.com/delgadodevelops/Pawfinder-Project",
  },
  {
    title: "SOS Recipes",
    image: "./images/SOS-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://sosrecipes.herokuapp.com/",
    github: "https://sosrecipes.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    image: "./images/weather.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://delgadodevelops.github.io/bootcamp-challenge-06/",
    github: "https://delgadodevelops.github.io/bootcamp-challenge-06/",
  },
  {
    title: "Team Profile Generator",
    image: "./images/team-profile-generator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/delgadodevelops/Team-Profile-Generator",
    github: "https://github.com/delgadodevelops/Team-Profile-Generator",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-custom-bluee to-custom-blue flex flex-col justify-center items-center py-5 xl:py-32 min-h-screen">
      <div className="p-5 m-5 xl:px-10 xl:mx-80">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-custom-orange">
          Portfolio
        </h1>
        <h2 className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Here are some of the projects I've worked on. Click on any project to
          learn more or view the code.
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="max-w-sm rounded-lg shadow-lg bg-custom-blue"
              >
                <a href={project.link}>
                  <img
                    className="rounded-t-lg"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <div className="p-5">
                  <a href={project.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-orange">
                      {project.title}
                    </h5>
                  </a>
                  <p className="my-4 font-normal text-gray-600">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-custom-orange ring-2 ring-custom-orange transition ease-in-out duration-300 mr-4"
                  >
                    Live Demo
                    <svg
                      className="w-3.5 h-3.5 ml-2 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <a
                    href={project.github}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-custom-orange ring-2 ring-custom-orange transition ease-in-out duration-300"
                  >
                    Github
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
