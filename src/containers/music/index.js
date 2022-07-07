import React from "react";
import BgMusic from "../../components/bgMusic";
import ListMusic from "../../components/listMusic";
import PlayerControls from "../../components/playerControls";
import { useDispatch, useSelector } from "react-redux";

export default function Music() {
  const stateMusic = useSelector((state) => state.musicReducer);
  const renderCardMusic = () => {
    if (stateMusic.detail.playing) {
      return (
        <div>
          {/* <BgMusic /> */}
          <PlayerControls detail={stateMusic.detail} />
          {/* <ListMusic /> */}
        </div>
      );
    }
  };
  // const [youtube, setYoutube] = useState([
  //   {
  //     url: "https://www.youtube.com/watch?v=JHSRTU31T14showinfo=0&enablejsapi=1&origin=http://localhost:3000",
  //     playing: false,
  //   },
  //   {
  //     url: "https://www.youtube.com/watch?v=JxBnLmCOEJ8showinfo=0&enablejsapi=1&origin=http://localhost:3000",
  //     playing: false,
  //   },
  // ]);
  // const handlePlaying = (index) => {
  //   const newYoutube = [...youtube];
  //   //  Neu chon video dang khac thi dung video hien tai
  //   if (!newYoutube[index].playing) {
  //     newYoutube.forEach((item) => {
  //       item.playing = false;
  //     });
  //     newYoutube[index].playing = true;
  //     setYoutube(newYoutube);
  //   } else {
  //     newYoutube[index].playing = false;
  //     setYoutube(newYoutube);
  //   }
  // };
  // const renderYouTube = () => {
  //   return youtube.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <ReactPlayer
  //           url={item.url}
  //           playing={item.playing}
  //           controls={false}
  //           height="100px"
  //           style={{ display: "none" }}
  //         />
  //         <button
  //           onClick={() => {
  //             handlePlaying(index);
  //           }}
  //         >
  //           123
  //         </button>
  //         <PlayerControls
  //           onPlayPause={() => {
  //             handlePlaying(index);
  //           }}
  //           playing={item.playing}
  //         />
  //       </div>
  //     );
  //   });
  // };
  return (
    <div className="bgMusic">
      <BgMusic />
      <div style={{ position: "relative", color: "white" }}>
        {/* {renderYouTube()} */}
        <ListMusic />
        {/* <PlayerControls detail={stateMusic.detail} /> */}
        {renderCardMusic()}
      </div>
    </div>
  );
}
