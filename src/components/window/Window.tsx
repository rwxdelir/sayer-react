import React, { Component, useState, useLayoutEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import "./Window.css";
import konsole_icon from "./../../assets/images/konsole.png";
import close_icon from "./../../assets/images/close.png";
import godown_icon from "./../../assets/images/godown.png";
import goup_icon from "./../../assets/images/goup.png";
import diamond_icon from "./../../assets/images/diamond.png";

let fullScreen: boolean = false;
let disableDragging: boolean = false;
let enableResizing: boolean = true;

const Window: React.FC = () => { 
  const [width, setWidth] = useState(699);
  const [height, setHeight] = useState(436);
  const [x, setX] = useState(Math.floor((window.innerWidth-699)/2));
  const [y, setY] = useState(Math.floor((window.innerHeight-436)/2));
  const rnd: any = React.useRef();
  
  const _switchResolution = () => {
    const maximizeIcon: any = document.querySelector(".goup-icon");
    const minimizeIcon: any = document.querySelector(".diamond-icon");
    if (!fullScreen) { 
      fullScreen = true;
      disableDragging = true;
      enableResizing = false;
      setWidth(window.innerWidth-20);
      setHeight(window.innerHeight-10);
      setX(8);
      setY(10);
      minimizeIcon.style.display = "block";
      maximizeIcon.style.display = "none";
    } else { 
      fullScreen = false;
      disableDragging = false;
      enableResizing = true;
      setWidth(699);
      setHeight(436);
      setX(Math.floor((window.innerWidth-699)/2));
      setY(Math.floor((window.innerHeight-436)/2));
      rnd.current.updatePosition({x, y});
      minimizeIcon.style.display = "none";
      maximizeIcon.style.display = "block";
    } 
  }

  const _closeWindow = () => {
    const windowClass: any = document.querySelector(".window");
    const menuKonsoleIcon: any = document.querySelector(".menu-konsole-icon");
    windowClass.style.display = "none";
    menuKonsoleIcon.style.display="block";
  }
  
  const _alignOnCenter = () => {
    const xx = Math.floor((window.innerWidth-width)/2);
    const yy = Math.floor((window.innerHeight-height)/2);
    rnd.current.updatePosition({ xx, yy });
    setX(xx);
    setY(yy);
  }

  React.useLayoutEffect(() => {
    window.addEventListener('resize', _alignOnCenter)
    return () => window.removeEventListener("resize", _alignOnCenter);
  }, []);

  return (
    <div className="window-container" style={{width:window.innerWidth-10,height:window.innerHeight-10}}>
      <Rnd
        ref={rnd}
        className="window"
        bounds=".window-container"
        size={{
          width: width,
          height: height
        }}
        minWidth={699}
        minHeight={436}
        maxWidth={window.innerWidth - 20}
        maxHeight={window.innerHeight - 20}
        position = {{x: x, y: y}}
        onDragStop={(e, d) => { setX(d.x);
                                setY(d.y)}
        }
        onResize={(e, direction, ref, delta, position) => {
          setWidth(parseInt(ref.style.width));
          setHeight(parseInt(ref.style.height));
          setX(position.x);
          setY(position.y);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWidth(parseInt(ref.style.width));
          setHeight(parseInt(ref.style.height));
          setX(position.x);
          setY(position.y);
        }}

        cancel=".cancel-dragging"
        dragHandleClassName="resize-wrapper"
        enableResizing={enableResizing}
        disableDragging = {disableDragging}
      >
        <span onDoubleClick={() => {
          _switchResolution();
          }
        } className="resize-wrapper" style={{width: width-9}}></span>
        <img src={konsole_icon} className="terminal-icon" width="22" height="22"/>
        <img src={close_icon} 
          onClick = {() => { _closeWindow();}}
          className="close-icon" 
          width="26" height="26"
        />
        <img src={godown_icon} 
            onClick = {() => {_closeWindow();}}
            className="arrow-icon godown-icon" 
            width="13" height="13"
        />
        <img 
          src={goup_icon} 
          onClick = {() => {_switchResolution();}} 
          className="arrow-icon goup-icon" 
          width="13" height="13"
        />
        <img 
          src={diamond_icon} 
          onClick = {() => {_switchResolution();}} 
          className="diamond-icon goup-icon arrow-icon" 
          width="17px" height="17px" />
        <div className="window-bar">
        <div><span className="window-cmd">arkul@localhost:~/home/arkul&gt;</span> grep -A10000 RU about.txt</div>
  Get into the creative mind of film director Lars von Trier and learn how reading in his world is connected with writing. Trier calls literature his “basic medium” and reveals his inspiration from writers as Thomas Mann, Leo Tolstoy, and Marcel Proust. He refers to dramaturgy as his “toothache” connected to his reading of Donald Duck, but writing is “the greatest kick you can get,” he says. 

  Even though dramaturgy has been difficult for Lars von Trier, he experiences joy when writing the manuscripts for his films: “The greatest thing is when you let it go, like when you levitate in meditation. You do that sometimes when you’re writing. Then you write fabulously and you experience a high,” he says. “I hope I’ll manage to make a movie intuitively. But I’m stuck in the mire. The mire of dramaturgy.”

        <div className="window-cmd current-cmd">
          arkul@localhost:~/home/arkul&gt;
          <div className="konsole-cursor"></div>
          </div>
        </div>
      </Rnd>
    </div>
  )
}

export default Window;
