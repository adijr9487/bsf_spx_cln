import React from "react";
import "./Launches.css";
import Search from "./Search/Search";
import Row from "./Row/Row";
import axios from "axios";

const Launches = () => {
  const [data, setData] = React.useState([]); // data from api
  const [loading, setLoading] = React.useState(false); // loading state
  const fetchData = async (filterData) => {
    setLoading(true)
    axios
      .post(
        `http://localhost:5000/api/spacex/mission/${filterData.year}/${filterData.status}/${filterData.type}/${filterData.site}/${filterData.input}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setData(res.data.data);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      });
  };

  return (
    <div id="missions" className="h-screen relative flex " style={{ background: "#141414" }}>
      <h3
        className="absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Mission & Launches
      </h3>
      <div className="launches-body mt-20 w-full">
        <Search
          onSearch={(data) => {
            fetchData(data);
          }}
          isLoading={loading}
        />
        <div className="px-20 my-4">
          <Row
            isHeader={true}
            data={{ ...data[0] }}
          /> 
          <div className="items">

          {data.length ? data.map((row, i) => (
            <Row
            key={i}
            isHeader={false}
            data={{...row}}
            />
            )) : <div className="text-center text-white">No Data Found</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launches;
