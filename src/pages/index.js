import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <React.Fragment>
      <header className="app-heading">
          <h1> Pokedex </h1>
          <div className="container">
            <div className="row">
              <div className="search-box column">
                <input className="search" placeholder="Search Pokemon" />
                <div className="pokemon-info">
                  <img src="" alt="Bulbusaur" className="pokemon-image"/>
                  <span className="pokemon-name"> Bulbusaur </span>
                </div>
              </div>
              <div className="welcome-box column">
                Welcome to the Pokedex
              </div>
            </div>
          </div>
      </header>
    </React.Fragment>
  );
}
