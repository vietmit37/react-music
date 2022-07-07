import React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

export default function ListMusic() {
  const viewMusic = useSelector((state) => state.musicReducer);
  const dispatch = useDispatch();
  const renderlistMusic = () => {
    return viewMusic.data.map((item, index) => {
      return (
        <div key={index}>
          <ReactPlayer
            url={item.url}
            playing={item.playing}
            controls={false}
            height="100px"
            style={{ display: "none" }}
          />
          <span
            onClick={() => {
              dispatch({ type: "PLAY_MUSIC", payload: index, item });
            }}
            style={{ cursor: "pointer" }}
          >
            {item.nameMusic}
          </span>
        </div>
      );
    });
  };
  return <div>{renderlistMusic()}</div>;
}
