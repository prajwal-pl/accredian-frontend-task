import React from "react";
import Navbar from "../components/Navbar";
import HeroCard from "@/components/HeroCard";
import Refer from "@/components/Refer";
import ReferalBenefits from "@/components/ReferalBenefits";

type Props = {};

const ReferPage = (props: Props) => {
  return (
    <div className="max-h-full max-w-full overflow-y-auto">
      <Navbar />
      <HeroCard />
      <Refer />
      <ReferalBenefits />
    </div>
  );
};

export default ReferPage;
