import React, { useEffect, useState, useContext } from "react";
import "./Timeline.css";
import TimelineCard from "./TimelineCard/TimelineCard";
import axiosInstance from "../../Utility/helper-component/Axios/RequestHandler";
import { UserContext } from "../../context/UserContext";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const fetchData = () => {
    setLoading(true);
    axiosInstance
      .post("http://localhost:5000/api/spacex/history", {})
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user) {
      fetchData();
    } else {
      setData([{}, {}, {}, {}]);
    }
  }, [user]);

  return (
    <div
      id="timeline"
      className="h-screen relative flex items-start"
      style={{ background: "#0a0a0a" }}
    >
      <h3
        className="page-head absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Timeline
      </h3>
      <div className="time-list overflow-scroll p-14 w-screen flex mt-10">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="time-line-box px-6 border-t border-neutral-500 flex flex-col items-center shrink-0"
              style={{ width: "400px" }}
            >
              <div
                className="bg-white rounded-full h-8 w-8 my-4"
                style={{ marginTop: "-16px" }}
              ></div>
              {user ? (
                <TimelineCard data={item} />
              ) : (
                <div className="card-loader m-8">
                  <div className="card__image"></div>
                  <div className="card__content">
                    <h2 className="loading-h2 my-4"></h2>
                    <p className="loading-p"></p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
