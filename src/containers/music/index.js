import React, { useEffect } from "react";
import BgMusic from "../../components/bgMusic";
import ListMusic from "../../components/listMusic";
import PlayerControls from "../../components/playerControls";
import { useDispatch, useSelector } from "react-redux";

export default function Music() {
  const stateMusic = useSelector((state) => state.musicReducer);

  return (
    <div className="bgMusic">
      <BgMusic />
      <div style={{ position: "relative", color: "white" }}>
        <ListMusic />
        <PlayerControls detail={stateMusic.detail} data={stateMusic.data} />
      </div>
    </div>
  );
}
