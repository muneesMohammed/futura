import React, { useEffect, useState } from "react";
import { API_KEY } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`?t=ironman&apikey=${API_KEY}`).then((response) => {
      console.log(response.data);
      //  let results=setMovie(response.data)
      setMovie(response.data.Title);
    });
  }, []);
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">{movie}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="decription">
          loremEu anim occaecat anim fugiat laboris dolore culpa pariatur
          exercitation non tempor. Enim dolor cupidatat non adipisicing.
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
