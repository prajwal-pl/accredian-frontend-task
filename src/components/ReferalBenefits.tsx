import { ProgramRows, Programs } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import programPic from "/programPic.png";
import { Link } from "react-router-dom";

type Props = {};

function ReferalBenefits({}: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="font-semibold text-2xl text-center py-12">
        What are the <span className="text-blue-500">Referal Benefits?</span>
      </h1>
      <div className="flex items-center gap-4 justify-end w-full text-lg mb-4 mr-12">
        Enrolled
        <input
          type="checkbox"
          className="toggle toggle-info toggle-md text-white mr-6"
          defaultChecked
        />
      </div>
      <div className="max-w-6xl mx-auto flex justify-center gap-12 w-full">
        <div className="card bg-white shadow-xl h-[510px] w-[270px]">
          <div className="">
            {Programs.map((program) => (
              <Link
                to={"#"}
                className={`hover:bg-blue-500  hover:text-white p-4 hover:rounded-lg ${
                  program.active && "bg-blue-500    rounded-t-lg text-gray-50"
                }  flex items-center justify-between pl-6 border-b border-spacing-x-1 border-gray-200 font-medium text-gray-600`}
              >
                {program.name}
                <ChevronRight />
              </Link>
            ))}
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div>
          <div className="card w-[800px] h-[495px] bg-blue-300 shadow-xl">
            <div className="overflow-x-auto rounded-xl">
              <table className="table rounded-xl">
                {/* head */}
                <thead className=" text-blue-600 text-base">
                  <tr className="rounded-lg">
                    {/* <th></th> */}
                    <th className="w-2/3">Programs</th>
                    <th className="w-1/3">Referrer Bonus</th>
                    <th className="w-1/3">Referral Bonus</th>
                  </tr>
                </thead>
                <tbody className="bg-blue-50 mt-4 space-x-3">
                  {ProgramRows.map((program) => (
                    <tr
                      key={program.name}
                      className="border-b border-spacing-x-1 border-gray-200 text-gray-600"
                    >
                      <td className="w-2/3 flex items-center gap-2">
                        <img src={programPic} alt="" width={30} height={30} />
                        <span className="ml-2">{program.name}</span>
                      </td>
                      <td className="w-1/3">₹ {program.bonus1}</td>
                      <td className="w-1/3">₹ {program.bonus2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-end gap-12 w-full mb-12">
        <button className="btn btn-outline flex gap-4 items-center text-base mr-6">
          Show More
          <ChevronDown size={20} />
        </button>
      </div>
      <div>
        <button className="btn bg-blue-500 text-white border-none max-w-[150px] w-full my-12 flex mx-auto">
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default ReferalBenefits;
