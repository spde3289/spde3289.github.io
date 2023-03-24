import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Test() {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setIsClicked(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Box
      className={isClicked ? "animate" : ""}
      onClick={handleClick}
      style={{ "--x": `${position.x}px`, "--y": `${position.y}px` }}
    />
  );
}
const clickEffect = keyframes`
  from {
    background-color: blue;
    background-position: 0 0;
  }
  to {
    background-color: red;
    background-position: var(--x) var(--y);
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  cursor: pointer;
  transition: background-position .5s ease-in-out;

  &.animate {
    animation: ${clickEffect} 1s ease-out;
    animation-fill-mode: forwards;
  }

  /* Start the animation from the clicked position */
  &.animate::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    top: var(--y);
    left: var(--x);
  }
`;

