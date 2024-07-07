import heroImage from "../../public/hero-image.png";
import ReferalModal from "./ReferalModal";

const HeroCard = () => {
  return (
    <div className="card max-w-6xl mx-auto bg-blue-50 h-[600px] w-full shadow-xl mb-12 z-[0]">
      <div className="card-body flex flex-row justify-between">
        <div className="md:py-[100px] py-[50px] px-5 flex flex-col gap-10  max-w-2xl">
          <h1 className="card-title text-5xl md:text-6xl font-bold pb-4 md:text-start text-center">
            {"Let's "}Learn
            <br /> & Earn
          </h1>
          <p className="text-xl md:text-3xl md:text-start text-center">
            Get a chance to win
            <br /> up-to{" "}
            <span className="text-4xl font-semibold text-blue-500 ">
              Rs. 15000
            </span>
          </p>
          <button
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              ).showModal()
            }
            className="btn bg-blue-500 text-white border-none max-w-[150px]"
          >
            Refer Now
          </button>
          <ReferalModal id="my_modal_1" />
        </div>
        <div>
          <img
            className="shrink-0 invisible md:visible"
            src={heroImage}
            alt="hero-image"
            width={650}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
