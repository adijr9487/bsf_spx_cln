import React, { useState } from "react";
import "./Vehicles.css";
import CarousalCard from "./Carousal/CarousalCard";

import falcon1 from "../../Utility/Asset/vehicle/Falcon 1.svg";
import falcon9 from "../../Utility/Asset/vehicle/Falcon 9 v1.0.svg";

import falcon9_1_1 from "../../Utility/Asset/vehicle/Falcon 9 v1.1 a.svg";
import falcon9_1_2 from "../../Utility/Asset/vehicle/Falcon 9 v1.1 b.svg";
import falcon9_1_3 from "../../Utility/Asset/vehicle/Falcon 9 v1.1 c.svg";

import falcon9_2_1 from "../../Utility/Asset/vehicle/Falcon 9 v1.2 a.svg";
import falcon9_2_2 from "../../Utility/Asset/vehicle/Falcon 9 v1.2 b.svg";
import falcon9_2_3 from "../../Utility/Asset/vehicle/Falcon 9 v1.2 c.svg";

import falcon9_block_a from "../../Utility/Asset/vehicle/Falcon 9 block 5 a.svg";
import falcon9_block_b from "../../Utility/Asset/vehicle/Falcon 9 block 5 b.svg";
import falcon9_block_c from "../../Utility/Asset/vehicle/Falcon 9 block 5 c.svg";

import falcon_heavy from "../../Utility/Asset/vehicle/Falcon Heavy.svg";
import fh_b5 from "../../Utility/Asset/vehicle/FH B5.svg";

import dragon1 from "../../Utility/Asset/vehicle/Dragon1.svg";
import dragon2 from "../../Utility/Asset/vehicle/Dragon2.svg";

const FALCON = "falcon";
const DRAGON = "dragon";

const data = [
  {
    title: "falcon 1",
    svgs: [falcon1],
    type: FALCON,
  },
  {
    title: "falcon 9 v1.0",
    svgs: [falcon9],
    type: FALCON,
  },
  {
    title: "falcon 9 v1.1",
    svgs: [falcon9_1_1, falcon9_1_2, falcon9_1_3],
    type: FALCON,
  },
  {
    title: "falcon 9 v1.2",
    svgs: [falcon9_2_1, falcon9_2_2, falcon9_2_3],
    type: FALCON,
  },
  {
    title: "falcon 9 B5",
    svgs: [falcon9_block_a, falcon9_block_b, falcon9_block_c],
    type: FALCON,
  },
  {
    title: "falcon heavy",
    svgs: [falcon_heavy],
    type: FALCON,
  },
  {
    title: "FH B5",
    svgs: [fh_b5],
    type: FALCON,
  },
  {
    title: "Dragon1",
    svgs: [dragon1],
    type: DRAGON,
  },
  {
    title: "Dragon2",
    svgs: [dragon2],
    type: DRAGON,
  },
];

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("falcon");

  return (
    <div className="h-screen bg-black relative">
      <h3
        className="absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Vehicles
      </h3>
      <div className="pt-8">
        <div className="w-4/5 text-slate-50 my-10 m-auto">
          <button
            className="button w-3/6 text-left hover:bg-stone-900 py-2"
            onClick={() => setSelectedVehicle("falcon")}
          >
            <p
              style={{
                borderBottomColor:
                  selectedVehicle == "falcon" ? "rgb(255, 255, 255)" : null,
              }}
              className="btn-txt uppercase pr-4 py-2"
            >
              Falcons
            </p>
          </button>
          <button
            className="button w-3/6 text-right hover:bg-stone-900 py-2"
            onClick={() => setSelectedVehicle("dragon")}
          >
            <p
              style={{
                borderBottomColor:
                  selectedVehicle == "dragon" ? "rgb(255, 255, 255)" : null,
              }}
              className="btn-txt uppercase pl-4 py-2"
            >
              Dragons
            </p>
          </button>
        </div>
        <div className="vehicle-body m-auto flex">  
          <div className="vehicle-body m-auto w-4/5 flex justify-evenly">
            {data.map((vehicleData) => {
              if (selectedVehicle == vehicleData.type){
                return <CarousalCard vehicleData={vehicleData} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
