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
  const drums = [
    {
      id: "clap",
      audio: clap,
      playKey: "Q",
    },
    {
      id: "closed-hh",
      audio: closedHh,
      playKey: "W",
    },
    {
      id: "kick-hat",
      audio: kickHat,
      playKey: "E",
    },
    {
      id: "kick",
      audio: kick,
      playKey: "A",
    },
    {
      id: "open-hh",
      audio: openHh,
      playKey: "S",
    },
    {
      id: "punchy-kick",
      audio: punchyKick,
      playKey: "D",
    },
    {
      id: "shaker",
      audio: shaker,
      playKey: "Z",
    },
    {
      id: "side-stick",
      audio: sideStick,
      playKey: "X",
    },
    {
      id: "snare",
      audio: snare,
      playKey: "C",
    },
  ];

  const handlePlaySound = (drum) => {
    console.log(drum.id);
  };

  return (
    <div>
      {drums.map((eachDrum) => (
        <DrumPad
          key={eachDrum.id}
          {...eachDrum}
          onPlaySound={handlePlaySound}
        />
      ))}
    </div>
  );
};
