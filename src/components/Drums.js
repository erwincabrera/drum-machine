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

export const Drums = ({ onPlaySound }) => {
  const drums = [
    {
      id: "clap",
      audio: clap,
      playKey: "Q",
      label: "Clap",
    },
    {
      id: "closed-hh",
      audio: closedHh,
      playKey: "W",
      label: "Closed HH",
    },
    {
      id: "kick-hat",
      audio: kickHat,
      playKey: "E",
      label: "Kick n' Hat",
    },
    {
      id: "kick",
      audio: kick,
      playKey: "A",
      label: "Kick",
    },
    {
      id: "open-hh",
      audio: openHh,
      playKey: "S",
      label: "Open HH",
    },
    {
      id: "punchy-kick",
      audio: punchyKick,
      playKey: "D",
      label: "Punchy Kick",
    },
    {
      id: "shaker",
      audio: shaker,
      playKey: "Z",
      label: "Shaker",
    },
    {
      id: "side-stick",
      audio: sideStick,
      playKey: "X",
      label: "Side Stick",
    },
    {
      id: "snare",
      audio: snare,
      playKey: "C",
      label: "Snare",
    },
  ];

  const handlePlaySound = (drum) => {
    onPlaySound(drum.label);
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
