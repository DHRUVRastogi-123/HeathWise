import React from "react";
import { useState } from "react";
import DrugsNews from "./DrugsNews";

function SearchDrugs({ onSubmit }) {
  const [searchDrugs, setSearchDrugs] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchDrugs);
    onSubmit(searchDrugs);
  };

  const handleChanges = (event) => {
    setSearchDrugs(event.target.value);
    console.log(event.target.value);
};

  return (
    <div className="drug-container">
      <div className="drugs-search">
        <div className="search-bar">
          <form action=""  onSubmit={handleFormSubmit}>
            <label htmlFor="" className="drug-heading">
              Enter Drugs & Medications A-Z{" "}
            </label>
            <p id="drop-props">
              Your trusted source of information for prescription drugs and
              medications
            </p>
            <div className="drug-input-container">
              <input
                style={{ width: "90%" }}
                type="text"
                onChange={handleChanges}
                value={searchDrugs}
              />
              <div className="drug-search-bar-icon">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#647a7d" }}
                ></i>
              </div>
            </div>
          </form>
        </div>
      </div>
        <DrugsNews />
        <div className="drugs-view-more">
            <button>View All</button>
        </div>
    </div>
  );
}

export default SearchDrugs;