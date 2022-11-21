import React from "react";

const Paragraph = ({quote}) => {
  return (
    <div className="card__paragraph">
      <i className="card__icon fa-solid fa-quote-left"></i>
      <p className="card__quote">"{quote.quote}"</p>
    </div>
  );
};

export default Paragraph;
