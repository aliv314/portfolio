import { FC } from "react";
import experienceIcon from "../../assets/images/icons/experience-icon.svg";

interface ExperienceCardProps {
  org: string;
  startEnd: string;
  position: string;
  bullets: Array<string>;
}
const ExperienceCard: FC<ExperienceCardProps> = (props) => {
  const { org, startEnd, position, bullets } = props;
  return (
    <li className="relative w-[100%] bg-navy-blue flex item-start py-4 rounded-3xl max-h-[20rem] pl-10 mb-2">
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <img className="h-full" src={experienceIcon} alt="test"></img>
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className="mb-2"> {org} </h4>
        <div className="flex mb-2">
          <p className="text-xs mr-auto">{position}</p>
          <p className="text-xs ">{startEnd}</p>
        </div>
        <ul>
          {bullets &&
            bullets.map((point, index) => {
              return (
                <li key={index} className=" list-disc text-xs mb-1">
                  <p className=" line-clamp-3">{point}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceCard;
