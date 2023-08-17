import { Navbar, Footer } from "@/components";
import {
  Hero,
  Collections,
  WhyChooseUs,
  WalletsConnected,
  HowItWorks,
  Feedback,
  RoadMap,
  Artists,
  Questions,
  Minting,
} from "@/components/sections";
import { Image } from "@nextui-org/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Collections />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <WhyChooseUs />
      <WalletsConnected />
      <HowItWorks />
      <Feedback />
      <RoadMap />
      <Artists />
      <Questions />
      <Minting />
      <Footer />
    </div>
  );
};

export default Home;
