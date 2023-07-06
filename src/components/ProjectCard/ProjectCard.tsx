import { FC } from "react";

import InsertLinkIcon from "@mui/icons-material/InsertLink";

import projectIcon from "../../assets/images/icons/projects-icon.svg";
import SkillTag from "../SkillTag/SkillTag";

interface ProjectCardProps {
  title: String;
  description: String;
  repo: String;
  tags: Array<String>;
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, description, repo, tags } = props;

  return (
    <li
      className="group relative w-[100%] bg-navy-blue flex items-center rounded-3xl h-[7rem] focus:h-[auto] py-2 focus:py-4 pl-10 mb-2"
      tabIndex={0}
    >
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <img className="h-full" src={projectIcon} alt="test"></img>
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className=""> {title} </h4>
        <p className="text-xs overflow-hidden mb-3 whitespace-nowrap text-ellipsis group-focus:whitespace-normal group-focus:overflow-visible">
          {description}
        </p>
        <div className="flex  items-end">
          <ul className="flex overflow-auto group-focus:flex-wrap group-focus:overflow-visible group-focus:mr-auto">
            {tags &&
              tags.map((tag, index) => {
                return (
                  <li key={index} className="list-none mr-1 group-focus:mb-1">
                    <SkillTag skill={tag} />
                  </li>
                );
              })}
          </ul>
          <a href={repo as string} className="hidden group-focus:contents">
            <InsertLinkIcon />
          </a>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
