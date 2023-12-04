import React from "react";

const Skills = () => {
  // Define an array of skills with skill name and image URL
  const skills = [
    {
      name: "HTML",
      imageUrl: "images/html5-color.svg",
    },
    {
      name: "CSS",
      imageUrl: "images/css3-color.svg",
    },
    {
      name: "Javascript",
      imageUrl: "images/javascript-color.svg",
    },
    {
      name: "React",
      imageUrl: "images/react-color.svg",
    },
    {
      name: "Tailwind CSS",
      imageUrl: "images/tailwindcss-color.svg",
    },
    {
      name: "GitHub",
      imageUrl: "images/github-color.svg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-bluee flex flex-col items-center justify-center py-5">
      <div className="p-5 m-5">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-custom-orange">
          My Skills
        </h1>
        <h2 className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          I have a wide range of experience in the following skills, but I am
          always looking to learn more!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-custom-blue p-6 rounded-lg shadow-md text-center text-white hover:bg-custom-orange hover:scale-110 hover:duration-700 flex flex-col justify-center items-center sm:w-52 sm:h-52 sm:text-lg lg:h-60 lg:w-60"
            >
              <img
                src={skill.imageUrl}
                alt={`Image for ${skill.name}`}
                className="h-10 w-10 mb-2 mx-auto sm:h-20 sm:w-20 sm:mb-7 lg:h-24 lg:w-24 lg:mb-8 "
              />
              <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
