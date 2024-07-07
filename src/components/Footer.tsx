import { Programs } from "@/lib/utils";
import {
  InstagramIcon,
  LinkedinIcon,
  LucideFacebook,
  Plus,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#282828]">
      <div className="max-w-5xl mx-auto text-white">
        <div className="pt-12 pb-8 border-b flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">accredian</h1>
            <p className="text-xs text-gray-400 text-center">
              credentials that matter
            </p>
          </div>
          <div className="">
            <button className="btn bg-blue-500 text-white">
              Schedule a 1-on-1 Call Now
            </button>
            <p className="text-xs text-gray-400 text-center">
              Speak with our learning Advisor
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 py-4 px-8">
          <div className="w-1/3">
            <h1 className="pb-4">Programs</h1>
            {Programs.map((program) => (
              <Link
                key={program.name}
                className="flex items-center justify-between py-2 lowercase"
                to={"#"}
              >
                {program.name} <Plus />
              </Link>
            ))}
          </div>
          <div className="w-2/3">
            <h1 className="pb-4">Contacts</h1>
            <div className="space-y-2">
              <p className="text-sm">
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p className="text-sm">
                Email us (For Product Management Queries): product@accredian.com
              </p>
              <p className="text-sm">
                Email us (For HR Queries): hr@accredian.com
              </p>
              <p className="text-sm">
                Email us (For Sales Queries): sales@accredian.com
              </p>
              <p className="text-sm">
                Email us (For Customer Support Queries): support@accredian.com
              </p>
              <p className="text-sm">
                Office Address: 4th Floor, Phase IV, Udhyog Vihar, Sector 18,
                <br />
                Gurugram, Haryana 122015.
              </p>
            </div>
            <h1 className="text-lg font-light py-2">Follow Us</h1>
            <div className="flex gap-3 items-center">
              <Link to={"/#"}>
                <LucideFacebook />
              </Link>
              <Link to={"/#"}>
                <LinkedinIcon />
              </Link>
              <Link to={"/#"}>
                <TwitterIcon />
              </Link>
              <Link to={"/#"}>
                <InstagramIcon />
              </Link>
              <Link to={"/#"}>
                <YoutubeIcon />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="pb-2">Accredian</h1>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to={"/#"}>About</Link>
              <Link to={"/#"}>Career</Link>
              <Link to={"/#"}>Blog</Link>
              <Link to={"/#"}>Admission Policy</Link>
              <Link to={"/#"}>Referral Policy</Link>
              <Link to={"/#"}>Privacy Policy</Link>
              <Link to={"/#"}>Terms of Service</Link>
              <Link to={"/#"}>Master FAQs</Link>
            </div>
          </div>
        </div>
        <div className="text-sm text-center pb-8 ">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
