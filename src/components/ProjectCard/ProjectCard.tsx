import { FC } from "react";

import projectIcon from "../../assets/images/icons/projects-icon.svg";
import SkillTag from "../SkillTag/SkillTag";

interface ProjectCardProps {
  title: String;
  description: String;
  tags: Array<String>;
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, description, tags } = props;

  return (
    <li className="group relative w-[100%] bg-navy-blue flex items-center rounded-3xl h-[7rem] hover:h-[auto] py-2 hover:py-4 pl-10 mb-2 ">
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <img className="h-full" src={projectIcon} alt="test"></img>
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className=""> {title} </h4>
        <p className="text-xs overflow-hidden mb-3 whitespace-nowrap text-ellipsis group-hover:whitespace-normal group-hover:overflow-visible">
          {description}
        </p>
        <ul className="flex overflow-auto group-hover:flex-wrap group-hover:overflow-visible">
          {tags &&
            tags.map((tag, index) => {
              return (
                <li key={index}className="list-none mr-1 group-hover:mb-1">
                  <SkillTag skill={tag} />
                </li>
              );
            })}
        </ul>
      </div>
    </li>
  );
};
export default ProjectCard;
