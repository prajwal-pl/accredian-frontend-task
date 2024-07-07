import { ChevronDown, MenuIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { Navlinks } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="text-center w-full bg-blue-50 text-sm py-2 font-medium">
        Navigate your ideal career path with tailored advice{"  "}
        <span className="text-blue-500">Contact Expert</span>
      </div>
      <div className="flex items-center justify-between mx-auto max-w-6xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 items-center ">
          <Link to="/">
            <h1 className=" text-2xl font-bold text-blue-500">accredian</h1>
            <p className="text-gray-500 text-[10px] max-w-2xl text-center">
              credentials that matter
            </p>
          </Link>
          <button className="flex items-center bg-blue-500 py-2 px-4 justify-center text-white rounded-lg">
            Courses
            <ChevronDown className="shrink-0" />
          </button>
        </div>
        <div className="md:flex items-center gap-4 hidden md:visible">
          <div className="flex gap-4 items-center ">
            <Link className="font-medium" to={"#"}>
              Refer & Earn
            </Link>
            <Link className="font-medium" to={"#"}>
              Resources
            </Link>
            <Link className="font-medium" to={"#"}>
              About Us
            </Link>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-lg font-medium">
            Login
          </button>
          <button className="flex items-center bg-blue-500 py-2 px-4 justify-center text-white rounded-lg">
            Try For Free
          </button>
        </div>
        <div>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button cursor-pointer"
              >
                <MenuIcon className="md:hidden" />
              </label>
            </div>
            <div className="drawer-side z-[1000]">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-white space-y-4 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className="z-10">
                  <a>Refer & Earn</a>
                </li>
                <li>
                  <a>Resources</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <button className="px-4 py-2 bg-gray-200 text-black rounded-lg font-medium">
                    Login
                  </button>
                </li>
                <li>
                  <button className="flex items-center bg-blue-500 py-2 px-4 justify-center text-white rounded-lg">
                    Try For Free
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto bg-blue-50 p-3 rounded-full px-6 my-6 flex items-center gap-3 justify-evenly max-w-[797px]">
          {Navlinks.map((link) => (
            <Link
              className={clsx("font-medium", { "text-blue-500": link.active })}
              to={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
