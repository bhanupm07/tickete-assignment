import React from "react";
import faqSvg from "../../../assets/images/faqSvg.svg";
import Dropdowns from "./Dropdowns/Dropdowns";

const FAQ = () => {
  return (
    <div className="pt-16 pb-6 border-b border-gray-300 mb-16">
      <h3 className="font-semibold text-2xl">Frequently asked questions</h3>
      <p className="text-[#60646C] mt-4 mb-10">
        Here are some of our most asked questions.
      </p>

      <div className="flex justify-between items-start gap-12">
        <div className="flex justify-between bg-[#F9F9FB] rounded-2xl p-4 w-2/3">
          <div className="flex flex-col gap-4">
            <p className="font-medium">
              Still need help?
              <br />
              We're here for you.
            </p>
            <button className="bg-black p-4 rounded-2xl text-white">
              Chat with us
            </button>
          </div>
          <img src={faqSvg} alt="decoration" className="" />
        </div>

        <Dropdowns />
      </div>
    </div>
  );
};

export default FAQ;
