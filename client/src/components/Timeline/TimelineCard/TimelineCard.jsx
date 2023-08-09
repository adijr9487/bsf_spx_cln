import React, { useState } from "react";
import "./TimelineCard.css";

const TimelineCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="px-8 pt-4 flex flex-col text-white bg-black border-0 rounded-md transition-all duration-1"
      style={{ boxShadow: "0px 0px 10px #141414" }}
    >
      <h2 className="title text-2xl text-neutral-300">{data.title}</h2>
      <p className="text-right text-neutral-500 text-xs">
        {data.event_date_utc}
      </p>
      <p className="details text-neutral-300 max-h-32 overflow-y-scroll">{data.details}</p>
      <div
        className={`mt-4 border-0 rounded-md transition-all duration-1 h-0 ${
          showDetails && "expended"
        }`}
        style={{ background: "#DADADA" }}
      >
        {showDetails && (
          <>
            <div className="header">
              <div className="px-4 pt-4 header-top flex justify-between text-gray-950">
                <h3 className="text-2xl">Mission 1</h3>
                <p>Falcon 9</p>
              </div>
              <p className="text-slate-800 px-4 text-xs">28 Sep, 2023</p>
              <p className="text-slate-800 px-4 py-2 text-xs">
                Cape Canaveral Air Force Station Space Launch Complex 40
              </p>
            </div>
            <div className="flight-details mx-4 py-2 border-t-2 text-gray-950 max-h-32 overflow-y-scroll">
              SSL-manufactured communications satellite intended to be placed at
              63° West over the Americas to provide video, data, internet and
              mobile services throughout the region.
            </div>
          </>
        )}
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-xs text-neutral-600 border-t-2 border-neutral-700 my-2 transition-all py-2 hover:text-neutral-300"
      >
        {!showDetails ? "Fligh Details" : "Hide"}
      </button>
    </div>
  );
};

export default TimelineCard;
