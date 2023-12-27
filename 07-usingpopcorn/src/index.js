import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App01 from "./App01";
import App02 from "./App02";
import App03 from "./App03";
import App04 from "./App04";
import App05 from "./App05";
import Rating from "./Rating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <Rating color='blue' maxRating={10} onSetRating={setMovieRating}></Rating>
      <p>The rating for this movie is {movieRating}</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* maxRating={10} color={"green"} size={45}  */}
    {/* <Rating messages={["Worst", "Bad", "Aerage", "Good", "Best"]} />
    <Rating maxRating={8} color={"red"} size={45} />
    <Test /> */}
    <App05 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
