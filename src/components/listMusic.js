import React, { memo, useRef } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import PlayerControls from "./playerControls";

const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

function ListMusic() {
  const viewMusic = useSelector((state) => state.musicReducer);
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const handleOnPlayPause = (item) => {
    dispatch({ type: "PLAY_MUSIC", payload: item });
  };
  const handleProgress = (state) => {
    dispatch({
      type: "SET_PROGRESS",
      payload: state,
    });
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const duration = playerRef.current ? playerRef.current.getDuration() : 0;
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : 0;
  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);
  const totalTime = format(duration - currentTime);

  const handleChangeSeek = (e) => {
    const { value } = e.target;
    console.log(e);
    playerRef.current.seekTo(value / 100);
  };

  const renderlistMusic = () => {
    return viewMusic.data.map((item, index) => {
      return (
        <div key={index}>
          <span
            onClick={() => handleOnPlayPause(item)}
            style={{ cursor: "pointer" }}
          >
            {item.nameMusic}
          </span>
        </div>
      );
    });
  };
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={viewMusic.detail.url}
        playing={viewMusic.playing}
        muted={viewMusic.muted}
        volume={viewMusic.volume}
        played={viewMusic.played}
        onProgress={handleProgress}
        controls={false}
        onEnded={() => {
          dispatch({
            type: "NEXT_SONG",
            payload: viewMusic.detail,
          });
        }}
        onReady={() => playerRef.current?.seekTo(0.0000001 / 100)}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        height="100px"
        style={{ display: "none" }}
      />
      {renderlistMusic()}
      <PlayerControls
        detail={viewMusic.detail}
        playing={viewMusic.playing}
        muted={viewMusic.muted}
        volume={viewMusic.volume}
        played={viewMusic.played}
        elapsedTime={elapsedTime}
        totalDuration={totalDuration}
        totalTime={totalTime}
        currentTime={currentTime}
        duration={duration}
        totalSeconds={viewMusic.totalSeconds}
        onFastForward={handleFastForward}
        onRewind={handleRewind}
        onSeek={handleChangeSeek}
      />
    </div>
  );
}
export default memo(ListMusic);
