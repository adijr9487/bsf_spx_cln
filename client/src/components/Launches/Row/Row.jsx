import React from "react";
import "./Row.css";

const Row = ({ isHeader, data }) => {
  return (
    <div className="flex flex-col bg-neutral-900 my-2 transition-all duration-2 hover:bg-neutral-800">
      <div className={`cell ${isHeader ? "text-neutral-400" : "text-neutral-200"} flex`}>
        {Object.keys(data).map((keys) => {
          return isHeader ? (
            <div style={{borderLeft: '1px solid #4c4c4c'}} className="uppercase border-y-0 px-4 py-1 w-full">{keys}</div>
          ) : (
            <div style={{borderLeft: '1px solid #4c4c4c'}} className="uppercase border-y-0 px-4 py-1 w-full">{data[keys].toString()}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
