import React from "react";
import { Display } from "./components/Display";
import { Drums } from "./components/Drums";

export const App = () => {
  return (
    <div id="drum-machine">
      <Display />
      <Drums />
    </div>
  );
};
