import { FC, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import DropownCard from "../DropdownCard/DropdownCard";
const projects = [
  {
    title: "PantryKeeper",
    icon: "",
    alt: "Pantry Keeper Icon",
    landing: "https://pantrykeeper.vercel.app/",
    github: "https://github.com/alv-314/pantrykeeper",
    description: "React web app aimed at tackling household foodwaste.",
  },
  {
    title: "PantryKeeper",
    icon: "",
    alt: "Pantry Keeper Icon",
    landing: "https://pantrykeeper.vercel.app/",
    github: "https://github.com/alv-314/pantrykeeper",
    description: "React web app aimed at tackling household foodwaste.",
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
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                  />
              );
            })}
        </ul>
      </Collapse>
    </div>
  );
};

export default Projects;
