import React, { useState } from "react";
import "./TimelineCard.css";
import axios from "axios";

const TimelineCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null); // details of the flight
  const fetchDetails = (flightNumber) => {
    setLoading(true);
    axios
      .post(
        `http://localhost:5000/api/spacex/pads/${flightNumber}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setDetails(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div
      className="box px-8 pt-4 flex flex-col text-white bg-black border-0 rounded-md transition-all duration-1"
      style={{ boxShadow: "0px 0px 10px #141414" }}
    >
      <h2 className="title text-md sm:text-xl md:text-2xl text-neutral-300">{data.title}</h2>
      <p className="text-right text-neutral-500 text-xs">
        {data.event_date_utc}
      </p>
      <p className="details text-sm sm:text-md text-neutral-300 max-h-32 overflow-y-scroll">
        {data.details}
      </p>
      <div
        className={`mt-4 border-0 rounded-md transition-all duration-1 h-0 ${
          !loading && showDetails && (details && details.details ? "expended" : "h-32")
        }`}
        style={{ background: "#DADADA" }}
      >
        {showDetails && !loading && (
          <>
            <div className="header">
              <div className="px-4 pt-4 header-top flex justify-between text-gray-950">
                <h3 className="text-md sm:text-xl md:text-2xl">{details.mission_name}</h3>
                <p>{details.rocket_name}</p>
              </div>
              <p className="text-slate-800 px-4 text-xs">
                {details.launch_date}
              </p>
              <p className="text-slate-800 text-md px-4 py-2 text-xs">
                {details.site_long_name}
              </p>
            </div>
            {details && details.details && (
              <div className="flight-details text-sm sm:text-md mx-4 py-2 border-t-2 text-gray-950 max-h-32 overflow-y-scroll">
                {details.details}
              </div>
            )}
          </>
        )}
      </div>
      {data.flight_number && (
        <button
          onClick={() => {
            if (!showDetails && !details) {
              fetchDetails(data.flight_number);
            }
            setShowDetails(!showDetails);
          }}
          className="text-xs text-neutral-600 border-t-2 border-neutral-700 my-2 transition-all py-2 hover:text-neutral-300"
        >
          {!showDetails ? "Fligh Details" : loading ? <>Loading...</> : "Hide"}
        </button>
      )}
    </div>
  );
};

export default TimelineCard;
