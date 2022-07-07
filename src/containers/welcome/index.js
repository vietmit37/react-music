import React from "react";
import Ballons from "../../components/ballons";
import Card from "../../components/card";
import ParallaxImagesContainer from "../../components/header";

export default function Welcome() {
  return (
    <div className="welcome">
      <Ballons />
      <ParallaxImagesContainer />
      <Card />
    </div>
  );
}
