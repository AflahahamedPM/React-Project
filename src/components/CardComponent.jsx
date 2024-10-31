import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence, motion } from "framer-motion";
library.add(faHeartRegular, faHeartSolid);

const CardComponent = ({ title, place, price, stay, imageUrl }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-[360px] h-[390px] rounded-xl shadow-lg text-left">
      <div className="relative">
        <img
          src={imageUrl}
          alt="popularDestination.img"
          width={340}
          height={340}
          className="rounded-xl mx-auto my-2"
        />
        <div
          className="absolute w-8 h-8 bg-white top-2 right-2 max-sm:right-2 focus:outline-none rounded-lg cursor-pointer"
          onClick={() => handleLike()}
        >
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            className={`mx-2 my-2  cursor-pointer ${
              isLiked ? "text-myOrange" : "text-myBlue"
            }`}
          />
        </div>
      </div>
      <AnimatePresence>
        <motion.h1
          className="text-xl ml-4 my-4 text-white font-bold cursor-pointer"
          initial={{ color: "#313143" }}
          whileHover={{ color: "#e8604c" }}
          exit={{ color: "#ffff" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {title}
        </motion.h1>

        <p className="text-xl ml-4 mb-4 text-myOrange max-sm:text-xs font-bold">
          ₹{price}{" "}
          <span className="text-gray-400 text-sm font-light">/ Per Person</span>
        </p>
        <div className="w-11/12 flex justify-between items-center text-xs font-atypKido font-extralight text-myBlue h-10 bg-gray-200 mx-auto rounded-lg">
            <p className="ml-4 uppercase">{stay}</p>
            <p className="mr-4 uppercase">{place}</p>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CardComponent;
