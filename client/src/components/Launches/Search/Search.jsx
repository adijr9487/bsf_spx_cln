import React from "react";
import "./Search.css";
import search from "../../../Utility/Asset/search.svg";

const Search = ({ onSearch }) => {
  const [searchData, setSearchData] = React.useState({
    input: null,
    year: null,
    status: null,
    type: null,
    site: null,
  });

  return (
    <div className="search flex w-full justify-between px-20">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchData((prev) => ({
            ...prev,
            input: e.target.value.length ? e.target.value : null,
          }));
        }}
        value={searchData.input || ""}
      />
      <div className="options flex justify-between w-full">
        <select
          id="year"
          name="yearlist"
          onChange={(e) =>
            setSearchData((prev) => ({
              ...prev,
              year: e.target.value,
            }))
          }
        >
          <option value="null">Year</option>
          {Array((new Date().getFullYear() % 100) + 1)
            .fill(0)
            .map((_, i) => (
              <option key={i} value={i + 2000}>{i + 2000}</option>
            ))}
        </select>

        <select
          id="status"
          name="statuslist"
          onChange={(e) =>
            setSearchData((prev) => ({
              ...prev,
              status: e.target.value,
            }))
          }
        >
          <option value="null">Status</option>
          <option value="success">Succeed</option>
          <option value="fail">Failed</option>
        </select>

        <select
          id="type"
          name="typelist"
          onChange={(e) =>
            setSearchData((prev) => ({
              ...prev,
              type: e.target.value,
            }))
          }
        >
          <option value="null">Type</option>
          <option value="Merlin A">Merlin A</option>
          <option value="Merlin C">Merlin C</option>
          <option value="v1.0">v1.0</option>
          <option value="v1.1">v1.1</option>
        </select>

        <select
          id="site"
          name="sitelist"
          onChange={(e) =>
            setSearchData((prev) => ({
              ...prev,
              site: e.target.value,
            }))
          }
        >
          <option value="null">Site</option>
          <option value="KSC LC 39A">KSC LC 39A</option>
          <option value="CCAFS SLC 40">CCAFS SLC 40</option>
          <option value="VAFB SLC 4E">VAFB SLC 4E</option>
        </select>

        <div className="flex items-center">
          <img
            src={search}
            alt="search"
            className="w-28 cursor-pointer"
            onClick={() => onSearch(searchData)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
