import React from "react";

function BgMusic() {
  const renderDotLight = () => {
    const dotLight = [];
    for (let i = 0; i < 200; i++) {
      dotLight.push(
        <div className="circle-container" key={i}>
          <div className="circle" />
        </div>
      );
    }
    return dotLight;
  };

  return (
    <>
      <div className="background"></div>
      <p className="message">
        Nguyễn Kim Khánh An
        <br />
        Choánn Nè
      </p>
      {renderDotLight()}
    </>
  );
}
export default BgMusic;
