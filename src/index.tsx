import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import './index.css';
import Particle from './components/particle/Particle';
import Header from './components/header/Header';
import { useState } from 'react';
import { ISourceOptions, Container, IOptions } from "tsparticles";
import Window from "./components/window/Window";
import ProjectCard from "./components/cards/cards";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import Splash from "./pages/splash/splash";
import "pathseg";
 

const App = () => {
 // React.useEffect(() => {
 //   setTimeout(() => {
 //     // TODO:
 //     window.location.href = 'skills';
 //   }, 5000) 
 // })
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact 
          render={(props) => (
            <div>
              <Particle />
              <Header />
              <Window>
              </Window>
            </div>
          )}
        />
        <Route
          path="/splash"
          exact 
          render={(props) => (
            <Splash />
          )}
        />
        <Route
          path="/projects"
         exact
         render={(props) => (
           <div>
             <Particle />
             <Header />
             <Projects />
           </div>
         )}
       />
       <Route
         path="/skills"
         exact
         render={(props) => (
           <div>
             <Particle />
             <Header />
             <Skills />
           </div>
         )}
       />
       <Route
         path="/contact"
         exact
         render={(props) => (
           <div>
             <Particle />
             <Header />
             <Contact />
           </div>
         )}
       />
     </Switch>
   </BrowserRouter>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
