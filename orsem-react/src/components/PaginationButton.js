import React from "react";
import "../stylesheets/SearchPage.scss";
import { Link } from "react-router-dom";

const PaginationButton = ({ dayId, onClick }) => {
  return (
    <li onClick={onClick}>
      <Link to={`/program/day-${dayId}`}> {dayId} </Link>
    </li>
  );
};

export default PaginationButton;
