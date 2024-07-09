import React from "react";
import { FaCheck, FaMinus } from "react-icons/fa";
import SubscriptionRow from "./SubscriptionRow";

const SubscriptionPlan = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-white text-center font-bold">Choose your plan</h1>
      <div className="w-10/12 mx-auto">
      <div className="flex gap-5 md:gap-12 mt-10 text-center md:pl-[33%] border-b-white border-b-2 z-50 bg-black sticky top-0">
        <div className="w-1/3 pt-4 md:px-3">
          <button className="text-white text-lg h-14 rounded w-full bg-red-600">
            Standard with ads
          </button>
          <p className="text-sm pt-2 text-gray-400 pb-2">$5.99 / month</p>
        </div>
        <div className="w-1/3 pt-4 md:px-3">
          <button className="text-white text-lg h-14 rounded w-full bg-red-600">
            Standard
          </button>
          <p className="text-sm pt-2 text-gray-400 pb-2">$8.99 / month</p>
        </div>
        <div className="w-1/3 pt-4 md:px-3 md:bg-[#759AAB] md:bg-opacity-20">
          <button className="text-white text-lg h-14 rounded w-full bg-red-700">
            Premium
          </button>
          <p className="text-sm pt-2 text-gray-400 pb-2">$11.99 / month</p>
        </div>
      </div>
      <SubscriptionRow
        title="Get 12 months for the price of 10*"
        standard={<FaMinus />}
        noAds="$89.90 / 1 year"
        premium="119.90 / 1 year"
        white="true"
        underline="true"
      />
      <SubscriptionRow
        title="Video quality up to"
        standard="1080 Full HD"
        noAds="1080 Full HD"
        premium="4K UHD & HDR"
      />
      <SubscriptionRow
        title="Concurrent streams"
        standard="2"
        noAds="2"
        premium="4"
      />
      <SubscriptionRow
        title="Downloads"
        standard={<FaMinus />}
        noAds={<FaCheck />}
        premium={<FaCheck />}
      />
      <SubscriptionRow
        title="Dolby Atmos support"
        standard={<FaMinus />}
        noAds={<FaMinus />}
        premium={<FaCheck />}
      />
      <SubscriptionRow
        title="Ad-free streaming**"
        standard={<FaMinus />}
        noAds={<FaCheck />}
        premium={<FaCheck />}
      />
      </div>
      <p className="text-xs w-10/12 mx-auto text-gray-400 mt-4 ">
        *With an annual subscription, compared to paying monthly.
      </p>
      <p className="text-xs w-10/12 mx-auto text-gray-400 ">
        **All plans may include theatrical trailers, promotion of CinemaScope
        products and services, sponsorship and alike. Video and audio quality
        subject to internet service and device capabilities. Standard With Ads
        Plan: device support varies, no content download functionality.{" "}
        <span className="text-white underline">Learn more.</span>
      </p>
    </div>
  );
};

export default SubscriptionPlan;
