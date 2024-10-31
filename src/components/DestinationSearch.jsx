import React, { memo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoomModal from "./RoomModal";

const DestinationSearch = memo(() => {

  const [type, setType] = useState("Adventure");
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const options = ["Adventure", "Wildlife", "Sightseeing"];
  const [total, setTotal] = useState(adults + children);

  useEffect(() => {
    setTotal(adults + children);
  }, [adults, children]);

  const handleSelect = (option) => {
    setType(option);
    setIsTypeModalOpen(false);
  };

  const decrementRooms = () => {
    setRooms((prevRooms) => {
        const updatedRooms = prevRooms - 1;
    
        if (total > updatedRooms * 4) {
          setChildren(0);
          setAdults(updatedRooms * 4);
        } else {
          setAdults((prevAdults) => prevAdults - 1);
        }
        return updatedRooms;
      });
    
  };

  const incrementRooms = () => {
    setRooms((prev) => prev + 1);
    setAdults((prev) => prev + 1);
  };

  return (
    <div className=" w-9/12 mx-auto h-[90px] bg-white py-4 pl-4 border border-gray-200 mt-12 rounded-xl flex items-stretch mb-16">
      <div className="px-4 border-r-2 w-60 border-gray-200">
        <p className="text-xs text-gray-500">Where to</p>
        <input
          type="text"
          className="text-black font-semibold text-sm font-atypKido py-2 border outline-none border-none placeholder-black"
          placeholder="Enter Place"
        />
      </div>

      <div className="px-4 border-r-2 border-gray-200">
        <p className="text-xs text-gray-500">When</p>
        <input
          type="date"
          className="text-black font-atypKido py-2 text-sm font-semibold border w-60 outline-none border-none "
          defaultValue={new Date().toISOString().slice(0, 10)}
          min={new Date().toISOString().slice(0, 10)}
        />
      </div>

      <div className="relative px-4 border-r-2 w-60 border-gray-200">
        <p className="text-xs text-gray-500">Type</p>
        <input
          type="text"
          value={type}
          className="text-black font-atypKido font-semibold text-sm py-2 border outline-none border-none cursor-pointer"
          onClick={() => setIsTypeModalOpen((prev) => !prev)}
          readOnly
        />

        {isTypeModalOpen && (
          <div className="absolute top-full w-52 border-none shadow-lg rounded-lg bg-white">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className="px-2 py-1 text-base font-atypKido font-light hover:bg-myOrange cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative px-4 border-r-2 w-60 border-gray-200"
        onClick={() => {
          setIsRoomModalOpen(true);
        }}
      >
        <div className="cursor-pointer">
          <p className="text-xs text-gray-500 mb-2">Rooms & Guests</p>
          <p className="text-sm font-medium font-atypKido text-myBlue">
            {adults} Adults, {children > 0 && `${children} Children, `} {rooms}{" "}
            Rooms{" "}
          </p>
        </div>
      </div>
      {isRoomModalOpen && (
        <RoomModal
          rooms={rooms}
          decrementRooms={decrementRooms}
          incrementRooms={incrementRooms}
          adults={adults}
          setAdults={setAdults}
          total={total}
          children={children}
          setChildren={setChildren}
          setIsRoomModalOpen={setIsRoomModalOpen}
        />
      )}

      <AnimatePresence>
        <motion.button
          className="text-white flex-grow h-[90px] w-10 -mt-4 rounded-lg px-4 text-xl bg-myOrange"
          initial={{ backgroundColor: "#e8604c" }}
          whileHover={{ backgroundColor: "#313143" }}
          exit={{ backgroundColor: "#e8604c" }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          Find Now
        </motion.button>
      </AnimatePresence>
    </div>
  );
});

export default DestinationSearch;
