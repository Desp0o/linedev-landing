import AccordionSection from "../components/AccordionSection";
import FourthSection from "../components/FourthSection";
import HeroSection from "../components/HeroSection";
import SectionSecond from "../components/SectionSecond";
import SwiperSection from "../components/SwiperSection";

const Home = () => {
  return (
    <main>
      <div className="mt-[20px]" />
      <HeroSection />

      <div className="mt-[160px]" />
      <SectionSecond />

      <div className="mt-[80px]" />
      <SwiperSection />

      <div className="mt-[80px]" />
      <FourthSection />

      <div className="mt-[270px]" />
      <AccordionSection />

      <div className="mt-[160px]" />

    </main>
  );
};

export default Home;
