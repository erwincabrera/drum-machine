import React, { useState } from "react";
import { Display } from "./components/Display";
import { Drums } from "./components/Drums";

export const App = () => {
  const [displayText, setDisplayText] = useState("");

  return (
    <div id="drum-machine">
      <Drums />
      <Display text={displayText} />
    </div>
  );
};
