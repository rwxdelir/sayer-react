import React, { useEffect, useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
//    e[0].style.width = window.innerWidth
//    e[0].style.height = window.innerHeight;
  };

  useEffect(() => {
    resizeWindow()
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div>
      <span>
        {windowWidth} x {windowHeight}
      </span>
    </div>
  );
};



