import React from "react";
import { Drums } from "./components/Drums";

export const App = () => {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <Drums />
    </div>
  );
};
