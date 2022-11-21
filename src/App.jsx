import { useState, useEffect } from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import data from "./json/quote.json";
import colors from "./json/colors.json";
function App() {
  const getRandomFromArray = (data) => {
    const indexRandom = Math.trunc(Math.random() * data.length);
    return data[indexRandom];
  };
  const [className, setClassName] = useState("card");
  const [quote, setQuote] = useState(getRandomFromArray(data));
  const [colorsArray, setColorsArray] = useState(getRandomFromArray(colors));

  // useEffect(() => {
  //   setClassName("");
  // }, [quote]);

  const handleClick = () => {
    let animationStatus = 0;
    const intervalAnimation = setInterval(() => {
      if (animationStatus == 0) {
        setClassName(className + " card--animation  ");
        console.log("1");
      }
      if (animationStatus == 2) {
        console.log("2");
        setQuote(getRandomFromArray(data));
        setColorsArray(getRandomFromArray(colors));
        setClassName(className + " card--animation2 ");
      }
      if (animationStatus == 3) {
        console.log("3");
        setClassName("card");
      }
      if (animationStatus == 4) clearInterval(intervalAnimation);
      animationStatus += 1;
    }, 600);
    // setClassName(className+" card--animation");
    // setTimeout(() => {
    //   setQuote(getRandomFromArray(data));
    //   setColorsArray(getRandomFromArray(colors));
    // }, 1500);
  };

  const backgroundImage =  (author) => {
    const normalizeAuthor =  author
      .toLowerCase()
      .split("")
      .map((el) => (el == " " ? "-" : el))
      .filter((el) => el !== "." && el !== ",")
      .join("");
    const  bgi =  `https://quotesnewtab.com/assets/authors/${normalizeAuthor}.jpg`;
    return bgi;
  };
  const style = {
    backgroundColor: colorsArray,
    color: colorsArray,
  };

  return (
    <div className="App" style={style}>
      <h1 className="App__title">
        A new motivational quote by pressing the button
      </h1>
      <Quotes
        quote={quote}
        handleClick={handleClick}
        colorsArray={colorsArray}
        className={className}
        backgroundImage={backgroundImage}
      />
    </div>
  );
}

export default App;
