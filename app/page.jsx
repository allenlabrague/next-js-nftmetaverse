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
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <WalletsConnected />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <HowItWorks />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Feedback />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <RoadMap />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Artists />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Questions />
      <div className="flex items-center justify-center my-28">
        <Image src="/divider.png" />
      </div>
      <Minting />
      <Footer />
    </div>
  );
};

export default Home;
