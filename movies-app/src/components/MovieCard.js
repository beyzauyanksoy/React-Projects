import React from "react";
import "../index.css";

function MovieCard(props) {
  return (
    <div className="boxs">
      <img src={props.image}></img>
      <div className="movieInfo">
        <div className="name">{props.name}</div>
        <div className="date">{props.date}</div>
        <div className="point">Puan: {props.point}</div>
      </div>
    </div>
  );
}

export default MovieCard;
