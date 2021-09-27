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
import "pathseg";

ReactDOM.render(
  <React.StrictMode>
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
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
