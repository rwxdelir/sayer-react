import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Particle from './components/particle/Particle';
import Menu from './components/menu/Menu';
import { useState } from 'react';
import { ISourceOptions, Container, IOptions } from "tsparticles";
import "pathseg";

function about(): void {
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Particle />
      <Menu 
        home = {about} 
        projects = {about}
        skills = {about}
        contact = {about}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


