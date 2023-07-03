import React, { FC, useState } from "react";
import Arrow from "@mui/icons-material/ArrowForward";

interface DropdownProps {
  title: String;
  toggleOpen: Function;
}

const Dropown: FC<DropdownProps> = (props) => {
  const { title, toggleOpen } = props;
  const [arrowOpen, setArrow] = useState(false);

  const toggleArrow= () => setArrow((cur) => !cur);


  return (
    <>
      <div
        onClick={() => {
          toggleOpen();
          toggleArrow()
        }}
        className="bg-navy-blue px-6 rounded-3xl flex items-center justify-center h-[3.5rem] max-w-[480px] mb-2"
      >
        <h2 className="text-lg mr-auto"> {title} </h2>
        <Arrow className={
            `${arrowOpen ? "rotate-0" : "rotate-90"}`
        }></Arrow>
      </div>
    </>
  );
};

export default Dropown;
