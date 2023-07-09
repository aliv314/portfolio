import { FC } from "react";

import GithubIcon from "@mui/icons-material/GitHub";

import projectIcon from "../../assets/images/icons/projects-icon.svg";
import SkillTag from "../SkillTag/SkillTag";

interface ProjectCardProps {
  repo: string;
  title: string;
  description: string;
  tags: Array<string>;
  selected: boolean;
  handleSelect: Function;
}
const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, description, repo, tags, selected, handleSelect} = props;
  const transition = "transition-all duration-300"
  return (
    <li
      className={`group relative w-[100%] bg-navy-blue flex items-center rounded-3xl ${transition} ${selected ?  'h-[auto] py-4' : 'h-[7rem] py-2' } pl-10 mb-2`}
      onClick={() => {
        handleSelect();
      }}
    >
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <img className="h-full" src={projectIcon} alt="test"></img>
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className="text-base"> {title} </h4>
        <p className={`text-xs  mb-3 ${transition} ${selected? 'whitespace-normal overflow-visible' : 'overflow-hidden whitespace-nowrap text-ellipsis' }`}>
          {description}
        </p>
        <div className="flex  items-end">
          <ul className={`flex ${transition} ${selected? 'flex-wrap overflow-visible mr-auto' : 'overflow-hidden'}`}>
            {tags &&
              tags.map((tag, index) => {
                return (
                  <li key={index} className={`list-none mr-1 ${transition} ${selected? 'mb-1' : ''}`}>
                    <SkillTag skill={tag} />
                  </li>
                );
              })}
          </ul>
          <a href={repo} target="_blank" rel="noreferrer" className={` ${selected? 'contents' : 'hidden'}`}>
            <GithubIcon/>
          </a>
        </div>
      </div>
    </li>
  );
};
export default ProjectCard;
