// import React from "react";
import "../css/main.css";
import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.string,
};
