// LottieAnimation.js
import React from "react";
import Lottie from "react-lottie";
import lottie from "../assets/logo/lottie1.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      role="img"
      aria-label="Animation showing a gif of a hand developing mobile and web applications."
      style={{ width: 400, height: 400 }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
