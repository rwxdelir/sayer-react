import React from "react";
import Particle from './../../components/particle/Particle';

const Splash = () => {
  React.useEffect(() => {
    setTimeout(() => {
      // TODO:
      window.location.href = '/';
    }, 5000) 
  })

  return (
    <div>
      <Particle />
    </div>
  )
}

export default Splash;
