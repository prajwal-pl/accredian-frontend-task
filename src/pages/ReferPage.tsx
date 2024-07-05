import React from "react";
import Navbar from "../components/Navbar";
import HeroCard from "@/components/HeroCard";
import Refer from "@/components/Refer";

type Props = {};

const ReferPage = (props: Props) => {
  return (
    <div className="max-h-full max-w-full overflow-y-auto">
      <Navbar />
      <HeroCard />
      <Refer />
    </div>
  );
};

export default ReferPage;
