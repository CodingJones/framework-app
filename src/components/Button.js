import React, { Component } from "react";
import "../App.css";

export function Button(props) {
  return <button className="signUpButton">{props.label} </button>;
}
