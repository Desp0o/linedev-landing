import React from "react";

interface SliderCardProps {
  image: string;
  cardTitle: string;
  cardText: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  image,
  cardTitle,
  cardText,
}) => {
  return (
    <div
      className="overflow-hidden relative w-[302px] h-[356px] rounded-[30px] drop-shadow-cardShadow flex 
    items-end py-[20px] px-[20px] bg-gradient-to-t from-primary  to-white"
    >
      <img
        src={image}
        alt="slider card"
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
      />

      <div className="flex flex-col gap-[4px] items-start text-white">
        <h3 className="relative z-[2] text-[20px] leading-[26px] font-[900]">
          {cardTitle}
        </h3>
        <p className="relative z-[2] text-[14px] leading-[18px] font-[900]">
          {cardText}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
