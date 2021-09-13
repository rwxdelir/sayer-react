import React, { Component, useState } from "react";
import { Rnd } from "react-rnd";
import "./Window.css"

const Window: React.FC = () => { 
  const [width, setWidth] = useState(699);
  const [height, setHeight] = useState(436);
  const [drag, setDrag] = useState(false);
  React.useEffect(() => {
    
  }, [drag])

  return (
    <Rnd
      className="window cancel-dragging"
      size={{
        width: width,
        height: height
      }}
      onResize={(e, direction, ref, delta, position) => {
        setWidth(parseInt(ref.style.width));
        setHeight(parseInt(ref.style.height));
      }}
      cancel=".cancel-dragging"
      position={{x: 581, y: 240}}
//    resizeHandleClasses={{bottom: "window-bar", left: "window-bar"}}
//      resizeHandleWrapperClass="resize-wrapper"
      enableResizing={false}
      resizeHandleClasses={{top: "resize-wrapper"}}
      enableResizing={{top: true}}
      resizeHandleWrapperStyle={{position: "absolute", width: width-16}}
    >
      <span className="resize-wrapper"></span>
      <div className="window-bar cancel-dragging">
      <div><span className="window-cmd">arkul@localhost:~/home/arkul&gt;</span> grep -A10000 RU about.txt</div>
Get into the creative mind of film director Lars von Trier and learn how reading in his world is connected with writing. Trier calls literature his “basic medium” and reveals his inspiration from writers as Thomas Mann, Leo Tolstoy, and Marcel Proust. He refers to dramaturgy as his “toothache” connected to his reading of Donald Duck, but writing is “the greatest kick you can get,” he says. 

Even though dramaturgy has been difficult for Lars von Trier, he experiences joy when writing the manuscripts for his films: “The greatest thing is when you let it go, like when you levitate in meditation. You do that sometimes when you’re writing. Then you write fabulously and you experience a high,” he says. “I hope I’ll manage to make a movie intuitively. But I’m stuck in the mire. The mire of dramaturgy.”
      </div>
      
    </Rnd>
  )
}

export default Window;
