import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../json/quote.json";
import Button from "./Button";
import Paragraph from "./Paragraph";

const Quotes = ({ quote, handleClick, colorsArray,className,backgroundImage }) => {
  const style = {
    backgroundColor: colorsArray,
  };

  const styleCard={
    backgroundImage: `url('${backgroundImage(quote.author)}'`,
  }
  return (
    <article style={styleCard} className={className}>
      <div className="opacityDiv"></div>
      <Paragraph quote={quote}/>
      <h1 className="card__author">{quote.author}</h1>
      <Button style={style} handleClick={handleClick}/>
    </article>
  );
};

export default Quotes;
