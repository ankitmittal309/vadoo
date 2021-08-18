import React from "react";
import "./App.css";

const Gallery = (props) => {
  return (
    <>
      <a
        className="imgTag"
        data-fancybox="gallery"
        href={props.gif}
        data-caption={props.title}
      >
        <img src={props.img} alt="" />
        <p>{props.title}</p>
      </a>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </>
  );
};

export default Gallery;
