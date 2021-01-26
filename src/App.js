import React from "react";
import { DrumPad } from "./components/DrumPad";

export const App = () => {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <DrumPad id="clap">Q</DrumPad>
      <DrumPad id="closed-hh">W</DrumPad>
      <DrumPad id="kick-hat">E</DrumPad>
      <DrumPad id="kick">A</DrumPad>
      <DrumPad id="open-hh">S</DrumPad>
      <DrumPad id="punchy-kick">D</DrumPad>
      <DrumPad id="shaker">Z</DrumPad>
      <DrumPad id="side-stick">X</DrumPad>
      <DrumPad id="snare">C</DrumPad>
    </div>
  );
};
