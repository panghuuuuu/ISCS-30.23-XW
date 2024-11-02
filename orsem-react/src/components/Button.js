import React from "react";
import "../stylesheets/Button.scss";
import "../stylesheets/App.scss";

const Button = (props) => {
  return (
    <button
      className="button-class bg-primaryViolet hover:bg-[#6844d2] hover:text-[#f4f4f4] hover:transition hover:ease-in-out flex-grow !pt-5 text-base sm:text-lg drop-shadow-sm font-medium"
      style={{ background: props.backgroundColor }}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
