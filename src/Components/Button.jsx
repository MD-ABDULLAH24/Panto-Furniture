import React from "react";
import arrow from "../assets/Arrow.png"

const Button = ({text}) => {
  return (
    <button className="text-sm text-primary flex items-center gap-1">
      {text}
      <img src={arrow} alt="" />
    </button>
  );
};

export default Button;
