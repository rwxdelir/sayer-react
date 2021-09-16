import React, { Component, useState } from "react";
import { Rnd } from "react-rnd";
import "./Window.css";
import konsole_icon from "./../../assets/images/konsole.png"
import close_icon from "./../../assets/images/close.png"

const Window: React.FC = () => { 
  const [width, setWidth] = useState(699);
  const [height, setHeight] = useState(436);
  const [x, setX] = useState(565);
  const [y, setY] = useState(250);

  return (
    <Rnd
      className="window"
      size={{
        width: width,
        height: height
      }}
      minWidth = {699}
      minHeight = {436}
      position = {{x: x, y: y}}
      onDragStop={(e, d) => { setX(d.x);
                              setY(d.y)}}
      onResize={(e, direction, ref, delta, position) => {
        setWidth(parseInt(ref.style.width));
        setHeight(parseInt(ref.style.height));
      }}
      cancel=".cancel-dragging"
      dragHandleClassName="resize-wrapper"
      enableResizing={true}
    >
      <span className="resize-wrapper" style={{width: width-10}}></span>
      <img src={konsole_icon} class="terminal-icon" width="22" height="22"/>
      <img src={close_icon} class="close-icon" width="25" height="25"/>
      <div className="window-bar">
      <div><span className="window-cmd">arkul@localhost:~/home/arkul&gt;</span> grep -A10000 RU about.txt</div>
Get into the creative mind of film director Lars von Trier and learn how reading in his world is connected with writing. Trier calls literature his “basic medium” and reveals his inspiration from writers as Thomas Mann, Leo Tolstoy, and Marcel Proust. He refers to dramaturgy as his “toothache” connected to his reading of Donald Duck, but writing is “the greatest kick you can get,” he says. 

Even though dramaturgy has been difficult for Lars von Trier, he experiences joy when writing the manuscripts for his films: “The greatest thing is when you let it go, like when you levitate in meditation. You do that sometimes when you’re writing. Then you write fabulously and you experience a high,” he says. “I hope I’ll manage to make a movie intuitively. But I’m stuck in the mire. The mire of dramaturgy.”
      </div>
      
    </Rnd>
  )
}

export default Window;
