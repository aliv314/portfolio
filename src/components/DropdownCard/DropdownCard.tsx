import React, { FC, useState } from "react";
import Arrow from "@mui/icons-material/ArrowForward";
interface DropdownProps {
  title: string;
  toggleOpen: Function;
  open: boolean;
}

const Dropown: FC<DropdownProps> = (props) => {
  const { title, toggleOpen, open} = props;
  const [arrowState, setArrow] = useState(open);
  const toggleArrow = () => setArrow(curr => !curr);

  return (
    <>
      <div
        onClick={() => {
          toggleOpen();
          toggleArrow();
        }}
        className="bg-navy-blue px-6 rounded-3xl flex items-center justify-center h-[3.5rem] max-w-[480px] mb-2"
      >
        <h2 className="text-lg mr-auto"> {title} </h2>
        <div className={`transition-all duration-300 ${arrowState ? "rotate-0" : " rotate-90"}`}>
            <Arrow/>
        </div>
      </div>
    </>
  );
};

export default Dropown;
