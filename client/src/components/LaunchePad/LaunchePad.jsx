import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./LaunchePad.css";
import rocket from "../../Utility/Asset/svgs/rocket.svg";
import location from "../../Utility/Asset/svgs/location.svg";
import axiosInstance from "../../Utility/helper-component/Axios/RequestHandler";
import { UserContext } from "../../context/UserContext";
import { NotifyContext } from "../../context/NotifyContext";

const LaunchePad = () => {
  const [data, setData] = useState([{}, {}, {}, {}]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { setNotify } = useContext(NotifyContext);

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    setLoading(true);
    axiosInstance
      .post(
        "http://localhost:5000/api/spacex/pads",
        {})
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setData([{}, {}, {}, {}]);
        setNotify({
          color: "bg-red-700",
          message: err.response.data.message,
        });
        setLoading(false);
      });
  };

  return (
    <div
      id="launch_pad"
      className="h-screen relative flex "
      style={{ background: "#141414" }}
    >
      <h3
        className="page-head absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Launch Pad
      </h3>
      <div className="card-list overflow-scroll flex items-center">
        <div className="flex" style={{ width: "min-content" }}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaunchePad;

const Card = ({ data }) => {
  return Object.keys(data).length == 0 ? (
    <div className="card-loader m-8">
      <div className="card__image"></div>
      <div className="card__content">
        <h2 className="loading-h2 my-4"></h2>
        <p className="loading-p"></p>
      </div>
    </div>
  ) : (
    <div
      id="launchpad"
      className="card m-8 p-2 bg-black text-white"
      style={{ width: "300px" }}
    >
      <>
        <div className="map">
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${data.location.longitude},${data.location.latitude},10,0/300x200?access_token=pk.eyJ1IjoiYWRpanI5NDg3IiwiYSI6ImNsa3lvd3A2MzB2Z3gzZW4wemppODNkbnkifQ.ntYqIZEZDpXB3LdGkY7o_w`}
            alt="map"
          />
        </div>
        <div className="card-body p-4">
          <div className="location flex">
            <img
              style={{ marginLeft: "-15px" }}
              src={location}
              alt="location"
              className="h-12"
            />
            <h3 className="flex items-center">
              {data.location.name}, {data.location.region}
            </h3>
          </div>
          <div className="title">
            <h2 className="text-xl">{data.full_name}</h2>
          </div>
          <div className="description h-28 overflow-y-scroll py-4">
            <p>{data.details}</p>
          </div>
          <div className="additional flex justify-between pt-4">
            <div className="status">
              <h4
                className="text-sm"
                style={{
                  color:
                    data.status === "active"
                      ? "#2BEE99"
                      : data.status === "retired"
                      ? "grey"
                      : "#CCEE2B",
                }}
              >
                {data.status.toUpperCase()}
              </h4>
            </div>
            <div
              className="accuracy flex justify-between"
              style={{ width: "60px" }}
            >
              <img src={rocket} alt="location" className="h-10" />
              <div className="flex flex-col">
                <p>{data.successes}</p>
                <p>{data.attempts}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
