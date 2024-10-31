import React from "react";
import whyChoose from "../assets/why-choose-tevely.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="w-10/12 mx-auto my-20 flex">
      <div className="w-11/12 relative ">
        <img src={whyChoose} className="w-full h-full" alt="" />
        <motion.p
          className="px-6 font-medium py-8 mt-2 mr-2 rounded-full text-white text-5xl font-goldenHopes bg-myOrange absolute right-4 top-6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
            Trips <br /> & tours{" "}
        </motion.p>
      </div>
      <div className="w-full h-[700px] bg-myBlue">
        <p className="text-3xl font-medium ml-20 mt-20 text-myOrange font-goldenHopes">
          Our benefit lists
        </p>
        <p className="text-4xl font-medium ml-20 mt-4 text-white font-atypKido">
          Why Choose Tevily
        </p>
        <p className="text-gray-400 ml-20 mt-4 text-xl font-light w-10/12 mx-auto">
          At Tevly, we specialize in curating unforgettable travel experiences
          tailored just for you. From hidden gems to iconic landmarks, we handle
          every detail so you can immerse yourself in the journey. Trust Tevly to turn your travel
          dreams into reality
        </p>
        <div className="flex gap-8 ml-20 mt-8 items-center">
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            className="text-myOrange h-10"
          />
          <div className="flex flex-col">
            <p className="text-xl text-white font-atypKido">
              Proffessional and Certified
            </p>
            <p className="text-gray-400 mt-1 text-base font-light w-10/12">
              Tevly’s certified professionals bring expert knowledge and trusted
              service, ensuring your travel experience is seamless and
              exceptional
            </p>
          </div>
        </div>
        <div className="flex gap-8 ml-20 mt-14 items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-myOrange h-10 mr-4"
          />
          <div className="flex flex-col">
            <p className="text-xl text-white font-atypKido">
              Get Instant Tour Booking
            </p>

            <p className="text-gray-400 mt-1 text-base font-light w-10/12">
              With Tevly, booking your next adventure is quick and hassle-free.
              Enjoy instant confirmations and seamless planning, so you can
              focus on the excitement ahead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
