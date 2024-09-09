import ButtonComponent from "../ButtonComponent";

const Subscribe = () => {
  return (
    <div className="w-[846px] h-[160px] rounded-[30px] bg-glassColor absolute -top-[80px] flex items-center justify-center gap-[72px]">
      <p className="text-[24px] leading-[26px] max-w-[141px]">
        არ ჩამორჩე სიახლეებს
      </p>

      <div className="flex items-center gap-[24px]">
        <input type="text" className="w-[330px] h-[36px] pl-[12px] rounded-[30px] outline-none bg-[#7BC7D080]" placeholder="YOUR E-MAIL ADDRESS" />

        <ButtonComponent
          text="გამოწერა"
          bg="linear-gradient(to right, #3edad0, #002241)"
          txtColor="white"
        />
      </div>
    </div>
  );
};

export default Subscribe;
