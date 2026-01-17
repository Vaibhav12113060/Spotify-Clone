import "./Player.css";
import { assets, songsData } from "../../assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Player = (props) => {
  /* ---------------- DEFAULT SONG ---------------- */
  const defaultIndex = props.id ?? 0;

  const defaultSong = {
    name: props.name ?? songsData[defaultIndex].name,
    desc: props.artist ?? songsData[defaultIndex].desc,
    image: props.img ?? songsData[defaultIndex].image,
    file: props.audio ?? songsData[defaultIndex].file,
  };

  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [song, setSong] = useState(defaultSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const prevVolume = useRef(volume);

  /* ---------------- PROGRESS ---------------- */
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  /* ---------------- PLAY / PAUSE ---------------- */
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  /* Play new song only if already playing */
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [song]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, []);

  /* ---------------- HELPERS ---------------- */
  const togglePlay = () => setIsPlaying((prev) => !prev);

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(prevVolume.current);
      audioRef.current.volume = prevVolume.current / 100;
    } else {
      prevVolume.current = volume;
      setVolume(0);
      audioRef.current.volume = 0;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  /* Progress percentage for color fill */
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume;

  /* ---------------- SONG CONTROLS ---------------- */
  const prevSong = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSong(songsData[newIndex]);
      setCurrentTime(0);
    }
  };

  const nextSong = () => {
    if (currentIndex < songsData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSong(songsData[newIndex]);
      setCurrentTime(0);
    }
  };

  const handleEnded = () => {
    if (currentIndex < songsData.length - 1) {
      nextSong();
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="player">
      {/* LEFT */}
      <div className="player-left">
        <img className="song-img" src={song.image} alt={song.name} />

        <div className="song-info">
          <h4>{song.name}</h4>
          <p>{song.desc}</p>
        </div>

        <img className="icon" src={assets.plus_icon} alt="Favorite" />
      </div>

      {/* CENTER */}
      <div className="player-center">
        <div className="controls">
          <img src={assets.shuffle_icon} alt="Shuffle" />
          <img src={assets.prev_icon} alt="Previous" onClick={prevSong} />

          <img
            className="play"
            src={isPlaying ? assets.pause_icon : assets.play_icon}
            alt="Play/Pause"
            onClick={togglePlay}
          />

          <img src={assets.next_icon} alt="Next" onClick={nextSong} />
          <img src={assets.loop_icon} alt="Loop" />
        </div>

        {/* PROGRESS BAR */}
        <div className="progress">
          <span>{formatTime(currentTime)}</span>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            style={{
              background: `linear-gradient(
                to right,
                #1db954 ${progressPercent}%,
                #555 ${progressPercent}%
              )`,
            }}
          />

          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="player-right">
        <img src={assets.queue_icon} alt="Queue" />
        <img
          src={assets.volume_icon}
          alt="Volume"
          onClick={toggleMute}
          style={{ cursor: "pointer" }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => {
            const value = Number(e.target.value);
            setVolume(value);

            if (audioRef.current) {
              audioRef.current.volume = value / 100;
            }
          }}
          style={{
            background: `linear-gradient(
                to right,
                #1db954 ${volumePercent}%,
                #555 ${volumePercent}%
              )`,
          }}
        />
      </div>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        src={song.file}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default Player;
