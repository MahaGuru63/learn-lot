// pages/index.tsx
import Header from "../components/header";
import Footer from "@/components/footer";
import SectionOne from "@/components/sectionone";
import LogoSlider from "./slider/page";
import HomePage from "@/components/Animation01";
import RainbowScroll from "@/components/Circle";
import TextVideoSection from "@/components/TextVideo";
import BalloonPage from "@/components/Ballon";
import DotCircle from "@/components/circle-dot";
import LinkedCircles from "@/components/Linkedcircle";
import TextAnimation from "@/components/TextAnimation";
import CardSection from "@/components/CardSec";
import "../styles/global.css";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TextVideoSection />
      <TextAnimation />
     
      <CardSection />
      <LinkedCircles />
      <Footer />
    </>
  );
};

export default Home;
