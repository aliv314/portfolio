import { FC, useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import DropownCard from "../DropdownCard/DropdownCard";
import { Collapse } from "@material-tailwind/react";

const projects = [
  {
    title: "Dev Portfolio",
    github: "https://github.com/alv-314/portfolio",
    description: "This portfolio was built from the ground up to showcase my work. I'm constantly improving it and adding new features.",
    tags: ["React", "Typescript", "Tailwind", "Material UI", "Vercel"],
  },
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
  {
    title: "MyTarClone",
    github: "https://github.com/alv-314/tar-clone",
    description:
      'C application that copies the functionality of the tar Unix command to store and extract files from a binary file.',
    tags: ["C", "Unix Shell"],
  },
];

const Projects: FC = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(-1);
  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    setOpen(true);
  }, []);

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
                  selected={index === status ? true : false}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  repo={project.github}
                  handleSelect={() => {
                    if (index === status) {
                      setStatus(-1);
                    } else {
                      setStatus(index);
                    }
                  }}
                />
              );
            })}
        </ul>
      </Collapse>
    </div>
  );
};

export default Projects;
