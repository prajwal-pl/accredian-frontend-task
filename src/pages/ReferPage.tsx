import Navbar from "../components/Navbar";
import HeroCard from "@/components/HeroCard";
import Refer from "@/components/Refer";
import ReferalBenefits from "@/components/ReferalBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const ReferPage = () => {
  return (
    <div className="max-h-full max-w-full overflow-y-auto">
      <Navbar />
      <HeroCard />
      <div className="hidden md:block">
        <Refer />
      </div>
      <ReferalBenefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ReferPage;
