import heroImage from "../../public/hero-image.png";
type Props = {};

const HeroCard = (props: Props) => {
  return (
    <div className="card max-w-6xl mx-auto bg-blue-50 h-[600px] w-full shadow-xl mb-12">
      <div className="card-body flex flex-row justify-between">
        <div className="py-[100px] px-5 flex flex-col gap-10 max-w-2xl">
          <h1 className="card-title text-6xl font-bold pb-4">
            {"Let's "}Learn
            <br /> & Earn
          </h1>
          <p className="text-3xl">
            Get a chance to win
            <br /> up-to{" "}
            <span className="text-4xl font-semibold text-blue-500">
              Rs. 15000
            </span>
          </p>
          <button className="btn bg-blue-500 text-white border-none max-w-[150px]">
            Refer Now
          </button>
        </div>
        <div>
          <img
            className="shrink-0 "
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
