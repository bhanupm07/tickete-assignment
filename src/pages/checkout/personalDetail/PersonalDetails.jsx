import React from "react";
import { IoEarth } from "react-icons/io5";
import InputComponent from "../../../components/InputComponent";

const PersonalDetails = () => {
  return (
    <form className="w-full border-b-2 border-gray-200 pb-6">
      <h3 className="font-semibold text-2xl">Enter your details</h3>

      <p className="text-[#60646C] mt-4 mb-10">
        We'll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>

      <div className="flex flex-col gap-6">
        <InputComponent type="text" placeholder="Full name *" />
        <div className="flex justify-between gap-6">
          <div className="flex items-center gap-2 p-4 text-[#60646C] w-1/2 border-[2px] border-gray-300 rounded-xl">
            <IoEarth />
            <select className="outline-none w-full text-gray-400">
              <option value="">Country code *</option>
              <option value="+92">+92</option>
              <option value="+91">+91</option>
            </select>
          </div>
          <div className="w-1/2">
            <InputComponent type="number" placeholder="Phone number *" />
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <InputComponent type="email" placeholder="Email *" />
          <InputComponent type="email" placeholder="Confirm email *" />
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;