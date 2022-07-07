import React from "react";

export default function Ballons() {
  const renderBallons = () => {
    const ballons = [];
    for (let i = 0; i < 10; i++) {
      ballons.push(<div className="bubble" key={i}></div>);
    }
    return ballons;
  };
  return (
    <>
      <div className="bubbles">{renderBallons()}</div>
    </>
  );
}
