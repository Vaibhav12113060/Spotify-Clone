import { createContext, useEffect, useRef, useState, useContext } from "react";
import { songsData } from "../assets/assets";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [songs, setSongs] = useState(songsData);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const play = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    await setSongs(songsData);
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const playSongWithContext = async (song, contextSongs) => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    await setSongs(contextSongs);
    await setTrack(song);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    const index = songs.findIndex((item) => item.id === track.id);
    if (index > 0) {
      await setTrack(songs[index - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    const index = songs.findIndex((item) => item.id === track.id);
    if (index < songs.length - 1) {
      await setTrack(songs[index + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / audioRef.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        audioRef.current.duration &&
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
            },
          });
      };
      audioRef.current.onended = () => {
        next();
      };
    }, 1000);
  }, [audioRef, next]);

  const contextValue = {
    audioRef,
    seekSong,
    track,
    setTrack,
    songs,
    setSongs,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    playSongWithContext,
    previous,
    next,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
