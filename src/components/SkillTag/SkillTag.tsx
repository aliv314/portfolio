import { FC } from "react";
interface TagProp {
  skill: String;
}

const SkillTag: FC<TagProp> = (props) => {
  const { skill } = props;

  return (
    <div className="bg-lime rounded-3xl px-2 py-2 mr-auto flex items-center justify-start select-none">
      <p className="text-xs text-dark-blue w-full text-ellipsis overflow-hidden text-center whitespace-nowrap">
        {skill}
      </p>
    </div>
  );
};

export default SkillTag;
