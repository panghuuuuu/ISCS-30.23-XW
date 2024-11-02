import React from "react";
import "../stylesheets/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-wrapper">
        <svg
          className="spinner inner"
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="path inner"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </svg>

        <svg
          className="spinner outer"
          width="100px"
          height="100px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="path outer"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
