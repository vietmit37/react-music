import React, { useEffect, useState } from "react";
import CardItem from "./cardItem";
import { motion } from "framer-motion";

export default function Card() {
  const [mouseChange, setMouseChange] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariants, setCursorVariants] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMouseChange({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mouseChange.x,
      y: mouseChange.y,
    },
    text: {
      height: 250,
      width: 250,
      x: mouseChange.x - 75,
      y: mouseChange.y - 75,
      backgroundColor: "pink",
      mixBlendMode: " multiply",
    },
  };
  const handleCardEnter = () => setCursorVariants("text");
  const handleCardLeave = () => setCursorVariants("default");
  return (
    <div className="tung">
      <CardItem onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave} />
      <CardItem onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave} />
      <CardItem onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave} />
      <CardItem onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave} />
      <motion.div
        className="cursor cursor--small"
        variants={variants}
        animate={cursorVariants}
      />
    </div>
  );
}
