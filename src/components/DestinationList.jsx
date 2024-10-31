import React from "react";
import {
  destinationListData1,
  destinationListData2,
} from "../constants/DestinationListData";
import { AnimatePresence, motion } from "framer-motion";
const DestinationList = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="font-goldenHopes font-semibold text-4xl text-myOrange">
          Destination lists
        </h1>
      </div>
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-6xl font-atypKido font-bold text-myBlue">
          Go Exotic Places
        </h1>
      </div>
      <AnimatePresence>
        <div className="w-9/12 mx-auto flex  gap-3">
          {destinationListData1.map((data) => (
            <div className="relative cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  src={data.imageUrl}
                  className="w-full h-auto"
                />
              </div>
              <motion.h1
                className="absolute bottom-4 left-4 text-3xl text-white font-bold font-atypKido cursor-pointer"
                initial={{ color: "#ffff" }}
                whileHover={{ color: "#e8604c" }}
                exit={{ color: "#ffff" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {data.title}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="w-9/12 mx-auto flex gap-3 m-2">
          {destinationListData2.map((data) => (
            <div className="relative cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  src={data.imageUrl}
                  className="w-full h-auto" 
                />
              </div>
              <motion.h1
                className="absolute bottom-4 left-4 text-3xl text-white font-bold font-atypKido cursor-pointer"
                initial={{ color: "#ffff" }}
                whileHover={{ color: "#e8604c" }}
                exit={{ color: "#ffff" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {data.title}
              </motion.h1>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

export default DestinationList;
