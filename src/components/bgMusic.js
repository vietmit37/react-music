import React from "react";

export default function BgMusic() {
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
      <img
        className="background"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"
        alt=""
      />
      <p className="message">
        all your dreams can come true
        <br />
        if you have the courage to pursue them
      </p>
      {renderDotLight()}
    </>
  );
}
