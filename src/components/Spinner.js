import React from "react";
import PropTypes from "prop-types";

export default function Spinner({
  title,
  state,
  borderColor,
  backgroundColor,
  color,
}) {
  const style = {
    // height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor,
    backgroundColor,
    color,
    paddingTop: "1rem",
  };
  const spinnerStyle = {
    borderColor,
  };
  return (
    <div
      // className="spinner-container"
      state="default_loading"
      style={style}
      defaultChecked={state === "default_loading"}
    >
      <div className="spinner"></div>
      <span style={style}> {title} </span>
    </div>
  );
}

Spinner.prototypes = {
  title: PropTypes.string,
  state: PropTypes.oneOf[("default_loading", "inverse-loading")],
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};
