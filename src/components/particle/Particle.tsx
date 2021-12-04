import React, { useEffect } from 'react';
import './Particle.css';
import Particles from "react-tsparticles";
import baseConfig from "./particles.json"
import { ISourceOptions, Container } from "tsparticles";
import "pathseg";
import polygonMask from "./arkul.svg";

const Particle: React.FC = () => {
  const containerRef: React.RefObject<Container> = React.useRef(null);
  const config = React.useRef(baseConfig);
  config.current.polygon!.url = polygonMask

  React.useEffect(() => {
    setTimeout(() => {
      const polygonOpt: any = containerRef.current!.options.polygon;
      polygonOpt.enable = false; 
      containerRef.current!.loadTheme("main");     
     
      containerRef.current!.refresh();
    }, 5000)
  }, [baseConfig])

  return (
    <div>
      <Particles
      container={containerRef}
      options={baseConfig as ISourceOptions} />
    </div>
  );
}


export default Particle;
