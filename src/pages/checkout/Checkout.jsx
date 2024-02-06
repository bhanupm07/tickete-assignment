import React from "react";
import BookingSummary from "./bookingSummary";
import { BsInfoCircleFill } from "react-icons/bs";
import PersonalDetails from "./personalDetail/PersonalDetails";
import AdditionalInformation from "./additionalInformation/AdditionalInformation";
import ModeOfPayment from "./modeOfPayment/ModeOfPayment";
import FAQ from "./FAQ";

const Checkout = () => {
  return (
    <main className="mx-28 pt-20">
      <div className="flex justify-between gap-6 border-b border-gray-300">
        <div className="flex-grow">
          <h2 className="text-5xl font-semibold">Confirm & pay</h2>

          <div className="p-4 border-2 rounded-xl my-16 bg-[#fcfcfd]">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Free cancellation</h4>
              <BsInfoCircleFill className="text-[#60646C] text-sm" />
            </div>
            <p className="text-[#60646C] text-sm">
              Tickets can be cancelled by 13th December, 2022.
            </p>
          </div>

          <PersonalDetails />
          <AdditionalInformation />
          <ModeOfPayment />
        </div>

        <div className="row-span-3">
          <BookingSummary />
        </div>
      </div>

      <FAQ />
    </main>
  );
};

export default Checkout;
