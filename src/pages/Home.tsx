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

      <div className="mt-[160px]" />
      <SwiperSection />

      <div className="mt-[80px]" />
    </main>
  );
};

export default Home;
