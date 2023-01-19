import React from "react";
import "./Phonetic.css";
import AudioPlayer from "react-modern-audio-player";

export default function Phonetic(props) {
  <div className="Phonetic">
    return ( function App(){props.phonetic.audio}
    {
      <div>
        <AudioPlayer
          src={props.phonetic.audio}
          audioInitialState={{
            muted: true,
            volume: 0.2,
            curPlayId: 1,
          }}
          placement={{
            interface: {
              templateArea: {
                trackTimeDuration: "row1-5",
                progress: "row1-4",
                playButton: "row1-6",
                repeatType: "row1-7",
                volume: "row1-8",
              },
            },
            player: "bottom-left",
          }}
          activeUI={{
            all: true,
            progress: "waveform",
          }}
        />
      </div>
    }
    );
    <span className="text">{props.phonetic.text}</span>
  </div>;
}
