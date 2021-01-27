import React from "react";
import { DrumPad } from "./DrumPad";
import clap from "../audio/clap.mp3";
import closedHh from "../audio/closed-hh.mp3";
import kickHat from "../audio/kick-hat.mp3";
import kick from "../audio/kick.mp3";
import openHh from "../audio/open-hh.mp3";
import punchyKick from "../audio/punchy-kick.mp3";
import shaker from "../audio/shaker.mp3";
import sideStick from "../audio/side-stick.mp3";
import snare from "../audio/snare.mp3";

export const Drums = () => {
  return (
    <div>
      <DrumPad id="clap" audio={clap} playKey="Q" />
      <DrumPad id="closed-hh" audio={closedHh} playKey="W" />
      <DrumPad id="kick-hat" audio={kickHat} playKey="E" />
      <DrumPad id="kick" audio={kick} playKey="A" />
      <DrumPad id="open-hh" audio={openHh} playKey="S" />
      <DrumPad id="punchy-kick" audio={punchyKick} playKey="D" />
      <DrumPad id="shaker" audio={shaker} playKey="Z" />
      <DrumPad id="side-stick" audio={sideStick} playKey="X" />
      <DrumPad id="snare" audio={snare} playKey="C" />
    </div>
  );
};
