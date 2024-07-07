import React from "react";
import Navbar from "../components/Navbar";
import HeroCard from "@/components/HeroCard";
import Refer from "@/components/Refer";
import ReferalBenefits from "@/components/ReferalBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

type Props = {};

const ReferPage = (props: Props) => {
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
