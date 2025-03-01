import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
      options={{
        strings: [
          props.text
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        cursor: " ",
        
      }}
    />
  );
}

export default Type;
