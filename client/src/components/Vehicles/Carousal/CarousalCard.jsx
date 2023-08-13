import React, { useState } from "react";
import arrow from "../../../Utility/Asset/arrow.svg";
import "./CarousalCard.css";

const CarousalCard = ({ vehicleData }) => {
  const [previousIndex, setPreviousIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("center");
  return (
    <div className="vehicle-card w-44 flex flex-col items-center pt-4">
      <div
        className="svg h-96 sm:h-full w-full flex items-end"
        style={{
          justifyContent:
            vehicleData.svgs.length > 1 ? "space-between" : "center",
        }}
      >
        {vehicleData.svgs.length > 1 && (
          <button
            className="h-full cursor-pointer transition-all hover:bg-opacity-30 hover:bg-slate-950"
            style={{ width: "30px", color: "white" }}
            onClick={() => {
              setPreviousIndex(currentIndex);
              setCurrentIndex((prev) =>
                prev === 0 ? vehicleData.svgs.length - 1 : prev - 1
              );
              setDirection("left");
            }}
          >
            <img src={arrow} alt="arrow" className="h-4 mx-auto" />
          </button>
        )}
        <div className="h-auto relative">
          <img
          key={`${vehicleData.title}+${currentIndex}`}
            src={vehicleData.svgs[currentIndex]}
            alt={vehicleData.title}
            className={`${
              direction == "right" ? "right-appear" : "left-appear"
            } h-96 sm:h-full`}
          />
          {previousIndex != null && (
            <img
            key={`${vehicleData.title}+${previousIndex}`}
              src={vehicleData.svgs[previousIndex]}
              alt={vehicleData.title}
              style={{ position: 'absolute', bottom: '0'}}
              className={`${
                direction == "right" ? "right-vanish" : "left-vanish"
              }`}
            />
          )}
        </div>
        {vehicleData.svgs.length > 1 && (
          <button
            className="h-full cursor-pointer transition-all rotate-180 hover:bg-opacity-30 hover:bg-slate-950"
            style={{ width: "30px", color: "white" }}
            onClick={() => {
              setPreviousIndex(currentIndex);
              setCurrentIndex((prev) =>
                prev === vehicleData.svgs.length - 1 ? 0 : prev + 1
              );
              setDirection("right");
            }}
          >
            <img src={arrow} alt="arrow" className="h-4 mx-auto" />
          </button>
        )}
      </div>
      <div className="title text-white uppercase py-1">{vehicleData.title}</div>
    </div>
  );
};

export default CarousalCard;
