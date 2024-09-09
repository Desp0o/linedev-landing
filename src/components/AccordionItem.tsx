import React, { Dispatch, SetStateAction } from "react";
import { dropDawnIcon } from "../assets/icons/dropDawon";

interface AccordionItemProps {
  title: string;
  text: string;
  index: number;
  activeIndex: number | null;
  setter: Dispatch<SetStateAction<number | null>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  text,
  index,
  activeIndex,
  setter,
}) => {
  const handleAccordion = () => {
    if (activeIndex === index) {
      setter(null);
    } else {
      setter(index);
    }
  };

  return (
    <div
      className="w-[1062px] max-h-[84px] overflow-hidden transition-all duration-300"
      onClick={handleAccordion}
      style={{ maxHeight: index === activeIndex ? "600px" : "84px" }}
    >
      <div className="cursor-pointer  h-[84px] bg-clip-border border-transparent bg-gradient-to-r from-thirdBlue  to-secondary border-[1px] rounded-[30px]">
        <div className="w-full h-full bg-white rounded-[30px] px-[30px] flex items-center justify-between">
          <p className="bg-clip-text text-transparent text-[16px] leading-[36px] font-[900] bg-gradient-to-r from-thirdBlue  to-secondary">
            {title}
          </p>
          <span
            className={`${
              activeIndex === index ? "-rotate-90" : "rotate-0"
            } transition-all duration-300`}
          >
            {dropDawnIcon}
          </span>
        </div>
      </div>

      <div className="mt-[20px] bg-clip-border border-transparent bg-gradient-to-r from-thirdBlue  to-secondary border-[1px] rounded-[30px]">
        <div className="w-full bg-white rounded-[30px] px-[30px] py-[30px] flex items-center justify-between">
          <p className="bg-clip-text text-transparent text-[16px] leading-[36px] font-[900] bg-gradient-to-r from-thirdBlue  to-secondary">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
