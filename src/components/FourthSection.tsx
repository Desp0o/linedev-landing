import { banner } from "../assets/icons/banner";
import { cssIcon } from "../assets/icons/cssIcon";
import { htmlIcon } from "../assets/icons/htmlIcon";
import { jsIcon } from "../assets/icons/jsIcon";
import { machineLearningIcon } from "../assets/icons/machLearIcon";
import ProgramCardComponent from "./ProgramCardComponent";

const FourthSection = () => {
  return (
    <div className="relative w-[1062px] flex flex-col mx-auto">
      <div className="flex">
        <p className="text-[36px] leading-[46px] font-[900] w-[317px] flex items-center justify-center bg-gradient-to-r from-thirdBlue to-fourthBlue bg-clip-text text-transparent">
          კურსები
        </p>

        {banner}
      </div>

      <div className="flex justify-between pb-[210px] pt-[30px] px-[50px] w-full bg-gradient-to-r from-primary  to-secondary rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
        <h2 className="max-w-[165px] text-white tex-[24px] leading-[30px] font-[900]">
          განათლება უკეთესი მომავლისთვის
        </h2>

        <div className="flex flex-col gap-[10px] max-w-[610px]">
          <p className="text-white text-[18px] leading-[20px]">
            აღმოაჩინე ცოდნის სამყარო, რომელიც მორგებულია შენს საჭიროებებზე.
            ჩვენი ექსპერტების მიერ შექმნილი კურსები გაძლიერებს, ისწავლო,
            განვითარდე და მიაღწიო შენს მიზნებს.{" "}
          </p>
          <button className="w-[130px] h-[28px] flex items-center justify-center bg-white rounded-[30px] text-[12px] leading-[14px] text-[#2C81C4] py-[8px] px-[12px]">
            იხილე სრულად
          </button>
        </div>
      </div>

      <div className="flex gap-[24px] absolute -bottom-[118px] left-1/2 -translate-x-1/2">
        <ProgramCardComponent
          icon={htmlIcon}
          text="WEB პროგრამირება (HTML & CSS)"
        />

        <ProgramCardComponent
          icon={cssIcon}
          text="WEB პროგრამირება (HTML & CSS)"
        />

        <ProgramCardComponent icon={jsIcon} text="JAVASCRIPT-ის კურსი" />

        <ProgramCardComponent
          icon={machineLearningIcon}
          text="AI & მანქანური სწავლება"
        />
      </div>
    </div>
  );
};

export default FourthSection;
