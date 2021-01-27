import React from "react";

export const DrumPad = ({ id, audio, playKey }) => {
  return (
    <button id={id} className="drum-pad">
      {playKey}
      <audio id={playKey} className="clip" src={audio}></audio>
    </button>
  );
};
