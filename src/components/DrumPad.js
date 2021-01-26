import React from "react";

export const DrumPad = ({ id, children }) => {
  return (
    <button id={id} className="drum-pad">
      {children}
    </button>
  );
};
