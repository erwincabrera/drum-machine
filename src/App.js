import React, { useState } from "react";
import { Display } from "./components/Display";
import { Drums } from "./components/Drums";

export const App = () => {
  const [displayText, setDisplayText] = useState("");

  const handlePlaySound = (label) => {
    setDisplayText(label);
  };

  return (
    <div id="drum-machine">
      <Drums onPlaySound={handlePlaySound} />
      <Display text={displayText} />
    </div>
  );
};
