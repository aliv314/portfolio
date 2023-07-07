import { FC, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import DropownCard from "../DropdownCard/DropdownCard";
import { Collapse } from "@material-tailwind/react";

const projects = [
  {
    title: "PantryKeeper",
    github: "https://github.com/alv-314/pantrykeeper",
    description:
      "Inspired by the UN’s sustainable development goals. PantryKeeper is a JavaScript web app that provides a user-friendly solution for household food waste.",
    tags: ["React", "Node", "Express", "SCSS", "Cloud Firestore"],
  },
  {
    title: "Spark-E Backend",
    github: "https://github.com/alv-314/SPRK-E_backend",
    description:
      "NodeJS Backend API designed to store encrypted journal entries.",
    tags: ["NodeJS", "Express", "Agile Development", "MySQL", "Git"],
  },
  {
    title: "Exercisepedia",
    github: "https://github.com/FelixRodriguezJr/exercisepedia-iphone-app",
    description:
      "iOS App that guides the user through a series of bodyweight exercises and records their progress.",
    tags: ["Swift", "Xcode", "Github", "Agile Development"],
  },
  {
    title: "Geek Text",
    github: "https://github.com/AmberImani/CEN-4010-Group-15/tree/master",
    description:
      'Java SpringBoot API Service for "Geek Text", a virtual bookstore.',
    tags: ["Java", "Spring Boot", "Agile Development", "Github"],
  },
];

const Projects: FC = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="w-full max-w-[480px]">
      <DropownCard title={"Projects"} open={true} toggleOpen={toggleOpen} />
      <Collapse open={open}>
        <ul className="w-full flex flex-col items-end pl-[2rem]">
          {projects &&
            projects.map(function (project, index) {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  repo={project.github}
                />
              );
            })}
        </ul>
      </Collapse>
    </div>
  );
};

export default Projects;
