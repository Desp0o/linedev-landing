import ButtonComponent from "./ButtonComponent";
import BubbleIcon from "../assets/icons/bubbleIcon";

const HeroSection = () => {
  return (
    <div
      className="relative w-full rounded-tl-[30px] rounded-tr-[30px] lg:pt-[140px] lg:pb-[180px]
    bg-gradient-to-r from-primary to-secondary overflow-hidden"
    >
      <div className="relative z-[2] flex flex-col gap-[40px] justify-center">
        <h1 className="text-[36px] leading-[46px] font-[900] text-center mx-auto text-white">
          Discover One Of The Best <br/> Learning Platform
        </h1>

        <div className="flex items-center justify-center gap-[40px]">
          <ButtonComponent
            bg="white"
            btnHeight="42px"
            text="Join now"
            txtColor="#2C81C4"
          />
          <ButtonComponent
            btnHeight="42px"
            text="Learn more"
            border={true}
            borderColor="white"
            txtColor="white"
          />
        </div>
      </div>

      <span className="absolute -top-[100px] -left-[100px] rotate-[60deg]">
        <BubbleIcon width={333} height={333}/>
      </span>

      <span className="absolute right-[250px] top-[60px]"><BubbleIcon width={333} height={333}/></span>
   
      <span className="absolute right-[76px] -bottom-[12px]"><BubbleIcon width={100} height={100}/>  </span>
      <span className="absolute left-[246px] bottom-[46px]"><BubbleIcon width={100} height={100}/>  </span>

    </div>
  );
};

export default HeroSection;
