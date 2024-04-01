import { HeroArea } from "./_components/hero-area";
import { Footer } from "./_components/footer";
import Features from "./_components/features";
import Pricing from "./_components/pricing";

const  MarketingPage = ()  => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#2c2c2c]">
      <div className="flex flex-col items-center justify-start md:justify-center md:text-center gap-y-8 flex-1 px-6 pb-10 ">
        <HeroArea />
        <Features />
        <Pricing />
        </div>
        <Footer/>
    </div>
  );
}

export default MarketingPage