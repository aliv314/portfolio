import { FC, useState } from "react";
import DropdownCard from "../DropdownCard/DropdownCard";
import { Collapse } from "@material-tailwind/react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const experience = [
  {
    org: "Optical Imaging Laboratory",
    startEnd: "06/22 - 12/22",
    position: "Android Developer",
    bullets: [
      "Collaborated closely with a team to advance the development of the “On the Spot” application.",
      "Developed and implemented key features in Java, such as a record retrieval system.",
      "Self-taught Android development principles and mastered essential components such as RecyclerView, Camera2, and ViewPager2.",
      "Utilized Cloud Firestore to manage patient records and facilitate text communications between clinicians and patients while ensuring data privacy and security.",
    ],
  },
];
const Experience: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="w-full max-w-[480px]">
      <DropdownCard
        title={"Experience"}
        open={false}
        toggleOpen={() => {
          toggleOpen();
        }}
      ></DropdownCard>
        <Collapse open={open}>
      <ul className="w-full flex flex-col items-end pl-[2rem]">
          {experience &&
            experience.map((experience) => {
              return (
                <ExperienceCard
                  org={experience.org}
                  startEnd={experience.startEnd}
                  position={experience.position}
                  bullets={experience.bullets}
                ></ExperienceCard>
              );
            })}
      </ul>
        </Collapse>
    </div>
  );
};

export default Experience;
