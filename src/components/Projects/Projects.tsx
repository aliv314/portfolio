import { FC, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Collapse } from "@material-tailwind/react";
import DropownCard from "../DropdownCard/DropdownCard";

const projects = [
  {
    title: "PantryKeeper",
    github: "https://github.com/alv-314/pantrykeeper",
    description: "React web app aimed at tackling household foodwaste.",
  },
  {
    title: "Spark-E Backend",
    github: "https://github.com/alv-314/SPRK-E_backend",
    description:
      "NodeJS Backend API designed to store encrypted journal entries.",
  },
];

const Projects: FC = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="w-full max-w-[480px]">
      <DropownCard title={"Projects"} toggleOpen={toggleOpen} />
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
