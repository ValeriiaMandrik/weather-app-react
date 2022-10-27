import React from "react";

export default function Button(props) {
  return (
    <button className="chosenCity" id="cityKyiv">
      {props.children}
    </button>
  );
}
