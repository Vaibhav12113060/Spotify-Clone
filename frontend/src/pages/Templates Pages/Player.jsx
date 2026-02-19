import "./Player.css";
import { assets } from "../../assets/assets";
import React, { useContext, useState, useRef, useEffect } from "react";
import { PlayerContext } from "../../Context/PlayerContext";

const Player = () => {
  const { track, playStatus, play, pause, time, previous, next, audioRef } =
    useContext(PlayerContext);

  const [volume, setVolume] = useState(1);
  const [isMute, setIsMute] = useState(false);
  const prevVolume = useRef(1);

  const changeVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
    setIsMute(vol === 0);
  };

  const toggleMute = () => {
    if (isMute) {
      const restoredVol = prevVolume.current === 0 ? 1 : prevVolume.current;
      setVolume(restoredVol);
      if (audioRef.current) audioRef.current.volume = restoredVol;
      setIsMute(false);
    } else {
      prevVolume.current = volume;
      setVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
      setIsMute(true);
    }
  };

  const togglePlay = () => {
    if (playStatus) {
      pause();
    } else {
      play();
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [audioRef]);

  return (
    <div className="player">
      {/* LEFT */}
      <div className="player-left">
        <img className="song-img" src={track.image} alt={track.name} />

        <div className="song-info">
          <h4>{track.name}</h4>
          <p>{track.desc}</p>
        </div>

        <img className="icon" src={assets.plus_icon} alt="Favorite" />
      </div>

      {/* CENTER */}
      <div className="player-center">
        <div className="controls">
          <img src={assets.shuffle_icon} alt="Shuffle" />
          <img src={assets.prev_icon} alt="Previous" onClick={previous} />

          <img
            className="play"
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt="Play/Pause"
            onClick={togglePlay}
          />

          <img src={assets.next_icon} alt="Next" onClick={next} />
          <img src={assets.loop_icon} alt="Loop" />
        </div>

        {/* PROGRESS BAR */}
        <div className="progress">
          <span>
            {time.currentTime.minute}:
            {time.currentTime.second.toString().padStart(2, "0")}
          </span>

          <input
            type="range"
            min={0}
            max={time.totalTime.minute * 60 + time.totalTime.second}
            value={time.currentTime.minute * 60 + time.currentTime.second}
            onChange={seekSong}
            style={{
              background: `linear-gradient(to right, #1db954 ${
                ((time.currentTime.minute * 60 + time.currentTime.second) /
                  (time.totalTime.minute * 60 + time.totalTime.second)) *
                  100 || 0
              }%, #535353 0%)`,
            }}
          />

          <span>
            {time.totalTime.minute}:
            {time.totalTime.second.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="player-right">
        <img src={assets.queue_icon} alt="Queue" />
        <img
          src={assets.volume_icon}
          alt="Volume"
          onClick={toggleMute}
          style={{ cursor: "pointer", opacity: isMute ? 0.5 : 1 }}
        />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={changeVolume}
          style={{
            background: `linear-gradient(to right, #1db954 ${volume * 100}%, #535353 0%)`,
          }}
        />
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default Player;
