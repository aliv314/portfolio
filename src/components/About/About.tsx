import { FC } from "react";
import SkillTag from "../SkillTag/SkillTag";

import devPic from "../../assets/images/images/DevPic.jpg";

const About: FC = () => {
  let skillsPlaceHolder: string[] = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Node",
    "React",
    "Express",
    "MySQL",
    "PostgreSQL",
    "Agile Development",
    "Git",
    "Document Object Model API",
    "Web APIs",
    "User Authentication",
    "OAuth",
    "Vercel",
    "Spring Boot",
    "Firebase",
    "Cloud Firestore",
    "GitHub",
    "Jest",
    "Python",
    "Java",
    "C",
    "Unix Shell",
    "Swift",
    "Xcode",
    "Web Development",
    "Android Studio",
  ];

  return (
    <div className="bg-navy-blue items-center rounded-3xl flex flex-wrap flex-col max-w-[480px] mb-2">
      <div className="relative mb-8 min-h-[8rem] bg-hero rounded-t-3xl bg-cover bg-center flex justify-center items-end">
        <img
          src={devPic}
          className="relative top-10 rounded-full w-[35%] h-1/4 aspect-square"
          alt="Developer headshot"
        ></img>
      </div>
      <div className="px-6 my-4">
        <div className="mb-4 mr-auto">
          <h1 className="text-xl mb-1"> Alejandro Vecchio </h1>
          <p className="p-2 border-l-2 text-xs">Full-Stack Software Engineer</p>
        </div>
        <div className="bg-navy-blue rounded-lg mb-4">
          <ul className="flex flex-wrap">
            {skillsPlaceHolder.map(function (skill, index) {
              return (
                <li key={index} className="mr-1 mb-1">
                  <SkillTag skill={skill}/>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
