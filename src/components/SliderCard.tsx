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
    <div className="relative w-[302px] h-[356px] rounded-[30px] drop-shadow-primaryShadow">
      <img src={image} alt="slider card" className="absolute left-0 top-0" />

      <h3 className="text-[20px] leading-[26px] font-[900]">{cardTitle}</h3>
      <p className="text-[14px] leading-[18px] font-[900]">{cardText}</p>
    </div>
  );
};

export default SliderCard;
