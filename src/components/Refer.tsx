import React from "react";
import referImage from "../../public/Figma-accredian.png";

type Props = {};

const Refer = (props: Props) => {
  return (
    <div className="h-[600px] bg-blue-50">
      <h1 className="font-semibold text-2xl text-center py-12">
        How do I <span className="text-blue-500">Refer?</span>
      </h1>
      <img
        className="max-w-5xl mx-auto my-10"
        src={referImage}
        alt="refer image"
        width={800}
        height={500}
      />
      <button className="btn bg-blue-500 text-white border-none max-w-[150px] w-full my-12 flex mx-auto">
        Refer Now
      </button>
    </div>
  );
};

export default Refer;
