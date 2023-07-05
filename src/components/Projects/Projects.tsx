import { FC, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import DropownCard from "../DropdownCard/DropdownCard";
import { Collapse } from "@material-tailwind/react";

const projects = [
  {
    title: "PantryKeeper",
    github: "https://github.com/alv-314/pantrykeeper",
    description: "React WebApp. Aimed at tackling household foodwaste.",
  },
  {
    title: "Spark-E Backend",
    github: "https://github.com/alv-314/SPRK-E_backend",
    description:
      "NodeJS Backend API designed to store encrypted journal entries.",
  },
  {
    title: "Exercisepedia",
    github: "https://github.com/FelixRodriguezJr/exercisepedia-iphone-app",
    description:"iOS App that guides the user through a series of bodyweight exercises and records their progress."
  },
  {
    title:"Geek Text",
    github:"https://github.com/AmberImani/CEN-4010-Group-15/tree/master",
    description:'Java SpringBoot API Service for "Geek Text", a virtual bookstore.'
  }
];

const Projects: FC = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="w-full max-w-[480px]">
      <DropownCard title={"Projects"} open = {true} toggleOpen={toggleOpen} />
      <Collapse open={open}>
        <ul className="w-full flex flex-col items-end pl-[2rem]">
          {projects &&
            projects.map(function (project, index) {
              return (
                <a
                  className="w-full"
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                  />
                </a>
              );
            })}
        </ul>
      </Collapse>
    </div>
  );
};

export default Projects;
