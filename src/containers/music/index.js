import React, { memo } from "react";
import BgMusic from "../../components/bgMusic";
import ListMusic from "../../components/listMusic";

function Music() {
  return (
    <div className="bgMusic">
      <BgMusic />
      <div style={{ position: "relative", color: "white" }}>
        <ListMusic />
      </div>
    </div>
  );
}
export default memo(Music);
