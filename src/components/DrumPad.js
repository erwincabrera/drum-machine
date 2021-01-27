import React from "react";
import { Sound } from "./Sound";

export const DrumPad = ({ id, audio, playKey }) => {
  const soundRef = React.useRef();

  const handleClick = () => {
    soundRef.current.play();
  };

  return (
    <button id={id} className="drum-pad" onClick={handleClick}>
      {playKey}
      <Sound id={playKey} src={audio} ref={soundRef} />
    </button>
  );
};
