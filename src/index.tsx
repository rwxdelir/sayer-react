import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Particle from './components/particle/Particle';
import Header from './components/header/Header';
import { useState } from 'react';
import { ISourceOptions, Container, IOptions } from "tsparticles";
import Window from "./components/window/Window";
import "pathseg";

function about(): void {
  console.log("ABOUT")
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Particle />
      <Header
        home = {about} 
        projects = {about}
        skills = {about}
        contact = {about}
      />
      <Window>
      </Window>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


