// import React from "react";
import "../css/main.css";
import PropTypes from "prop-types";

export const Card = ({imgSrc, imgAlt, title, text}) => {
  return (
    <div className="card">
      <img
        src={imgSrc}
        className="card-img-top"
        alt={imgAlt}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a
          href="#"
          className="btn btn-primary"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.object,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
