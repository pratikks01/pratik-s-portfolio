import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          // "Deep Learning Engineer",
          "MERN Stack Developer",
          "Photographer by Hobby 📸",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 58,
      }}
    />
  );
}

export default Type;
