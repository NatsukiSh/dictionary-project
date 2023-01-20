import React from "react";
import "./Phonetic.css";
import AudioPlayer from "react-modern-audio-player";

export default function Phonetic(props) {
  const playList = [
    {
      name: `Audio`,
      writer: ``,
      img: ``,
      src: props.phonetic.audio,
      id: 1,
    },
  ];
  return (
    <div className="Phonetic">
      <div>
        <AudioPlayer
          playList={playList}
          className="grid"
          audioInitialState={{
            muted: false,
            volume: 0.2,
            curPlayId: 1,
          }}
        />
      </div>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
