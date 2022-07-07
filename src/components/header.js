import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../assets/img/afloat_again_by_gydw1n_ddshap1.png";

const layers = [
  {
    name: "C",
    dataDepth: "1",
  },
  {
    name: "H",
    dataDepth: "-2",
  },
  {
    name: "O",
    dataDepth: "1.3",
  },
  {
    name: "Á",
    dataDepth: "-1.5",
  },
  {
    name: "N",
    dataDepth: "0.95",
  },
];

const Container = Styled.div`
	width: 100%;
  display: flex;
  justify-content: center;
  padding-top:105px;
	overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
    const text = document.getElementById("text");
    new Parallax(text);
  });

  return (
    <Container className="container" backgroundImage={backgroundImage}>
      <div id="scene">
        <h2 id="text">
          {layers.map((l, index) => (
            <span
              key={index}
              data-depth-y={l.dataDepth}
              style={{ fontSize: "8vw" }}
            >
              {l.name}
            </span>
          ))}
          <span data-depth-y="-1" style={{ marginLeft: "35px" }}>
            N
          </span>
          <span data-depth-y="1.8">È</span>
        </h2>
      </div>
      <p
        style={{
          marginTop: "190px",
          fontFamily: "'M PLUS 1 Code', sans-serif",
          textTransform: "uppercase",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "30px",
        }}
      >
        Thanh Tùnn tặng em
      </p>
    </Container>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dataDepth: PropTypes.string,
    })
  ),
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers,
};

export default ParallaxImagesContainer;
