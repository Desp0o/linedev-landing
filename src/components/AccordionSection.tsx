import { useState } from "react";
import AccordionItem from "./AccordionItem";

const accordionArray = [
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <h2 className="text-[36px] font-[900] leading-[45px] bg-gradient-to-r from-thirdBlue  to-secondary text-transparent bg-clip-text">
        ხშირად დასმული შეკითხვები
      </h2>

      <div className="flex flex-col gap-[24px]">
        {accordionArray.map((item, index) => {
          return (
            <AccordionItem
              activeIndex={activeIndex}
              setter={setActiveIndex}
              key={index}
              index={index}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionSection;
