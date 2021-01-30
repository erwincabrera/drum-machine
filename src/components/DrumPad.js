import React, { useEffect } from "react";
import { Sound } from "./Sound";

export const DrumPad = (props) => {
  const { id, audio, playKey, onPlaySound } = props;
  const soundRef = React.useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === playKey.toLowerCase()) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundRef.current]);

  const handleClick = () => {
    playSound();
  };

  const playSound = () => {
    soundRef.current.play();
    onPlaySound(props);
  };

  return (
    <button id={id} className="drum-pad" onClick={handleClick}>
      {playKey}
      <Sound id={playKey} src={audio} ref={soundRef} />
    </button>
  );
};
