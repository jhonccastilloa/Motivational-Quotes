import React from "react";

const Button = ({style,handleClick}) => {
  return (
    <button style={style} className="card__btn" onClick={handleClick}>
      {">"}
    </button>
  );
};

export default Button;
