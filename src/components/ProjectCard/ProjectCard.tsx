import { FC } from "react";

import projectIcon from "../../assets/images/icons/projects-icon.svg";

interface ProjectCardProps {
  title: String;
  description: String;
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, description } = props;

  return (
    <li className="relative w-[100%] bg-navy-blue flex items-center rounded-3xl h-[4rem] pl-10 mb-2">
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <img className="h-full" src={projectIcon} alt="test"></img>
      </div>
      <div className="w-[95%]">
        <h4 className=""> {title} </h4>
        <p className=" whitespace-nowrap overflow-hidden text-ellipsis text-xs">
          {" "}
          {description}{" "}
        </p>
      </div>
    </li>
  );
};
export default ProjectCard;
