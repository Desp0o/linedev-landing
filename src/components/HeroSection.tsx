import ButtonComponent from "./ButtonComponent";

const HeroSection = () => {
  return (
    <div className="relative w-full rounded-tl-[30px] rounded-tr-[30px] h-[150px] lg:pt-[140px] lg:pb-[180px]
    bg-gradient-to-r from-primary to-secondary">
    
    <div className="">
        <h1 className="text-[36px] leading-[46px] max-w-[688px] font-[900] text-center mx-auto text-white">Discover One Of The Best
        Learning Platform</h1>

        <ButtonComponent bg="white" btnHeight="42px" text="join now"/>
        <ButtonComponent btnHeight="42px" text="learn more" border={true} borderColor="white" txtColor="white"/>

    </div>

    </div>
  );
};

export default HeroSection;
