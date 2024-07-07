import { ChevronRight } from "lucide-react";
import supportImage from "/support.png";

const FAQ = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="font-semibold text-2xl text-center py-12">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>
      <div className="flex flex-col gap-12 ml-12 md:flex-row">
        <div className="flex flex-col gap-4 ">
          <button className="btn bg-white text-blue-500 shadow-xl border-none btn-wide ">
            Eligibility
          </button>
          <button className="btn btn-outline btn-wide">How To Use?</button>
          <button className="btn btn-outline btn-wide">
            Terms & Conditions
          </button>
        </div>
        <div className="join join-vertical w-[80%]">
          <div className="collapse collapse-arrow join-item border-none border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-sm font-medium">
              Do I need to have prior Product Management and Project Management
              experience to enroll in Accredian?
            </div>
            <div className="collapse-content">
              <p className="text-xs">
                No, the program is designed to be inclusive of all levels of
                experience. ALl topics will be covered from the basics, making
                it suitable for induviduals from any field of work.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-none border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-sm font-medium">
              What is the minimum system configuration required?{" "}
            </div>
            <div className="collapse-content">
              <p className="text-xs">system configuration goes here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="w-full flex items-center h-[150px] bg-blue-600 rounded-lg justify-between gap-4 px-11 ">
          <div className="flex items-center gap-4">
            <img
              className="flex shrink-0 "
              src={supportImage}
              alt="support"
              width={70}
              height={70}
            />
            <div className="text-white space-y-2">
              <h1 className="text-xl md:text-2xl font-medium">
                Want to delve deeper into the program?
              </h1>
              <p className="text-xs md:text-sm">
                Share your details to recieve insights from our program team!
              </p>
            </div>
          </div>
          <button className="btn bg-white text-blue-500 border-none flex items-center justify-end ">
            Get In Touch
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
