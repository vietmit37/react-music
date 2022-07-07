import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest}></div>;
}
export default function CardItem(props) {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  return (
    <>
      <Tilt
        className="card"
        options={options}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <div className="card__content">
          <h1>🎵</h1>
          <h2>Card 1 </h2>
        </div>
      </Tilt>
    </>
  );
}
