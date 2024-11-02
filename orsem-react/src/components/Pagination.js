import React from "react";
import "../stylesheets/SearchPage.scss";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
  var day = 1;
  const onClick = (e) => {
    day = e;
  };

  return (
    <div className="search-nav">
      <ul className="search-pagination">
        <PaginationButton dayId={1} onClick={onClick("day1")} />
        <PaginationButton dayId={2} onClick={onClick("day2")} />
        <PaginationButton dayId={3} onClick={onClick("day3")} />
        <PaginationButton dayId={4} onClick={onClick("day4")} />
        <PaginationButton dayId={5} onClick={onClick("day5")} />
      </ul>
    </div>
  );
};

export default Pagination;
