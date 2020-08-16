import React from "react";
import WelcomeBox from '../components/WelcomeBox';
import InfoBox from '../components/InfoBox';
import PokemonCard from '../components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

export default function Home() {
  return (
    <React.Fragment>
      <header className="app-heading">
          <h1> Pokedex </h1>
      </header>
      <div className="container">
        <div className="row" style={{backgroundColor: 'red', padding: "3px"}}>
          <InfoBox>
              <input className="search-box" placeholder="Search Pokemons" />
              <div className="row">
                <WelcomeBox>
                  <PokemonCard /> 
                </WelcomeBox>
                <WelcomeBox>
                  <PokemonCard /> 
                </WelcomeBox>
              </div>
          </InfoBox>
          <InfoBox>
            <WelcomeBox style={{marginTop: "5em"}}>
              <strong> Welcome to the pokedex </strong>
            </WelcomeBox>
          </InfoBox>
        </div>
      </div>
    </React.Fragment>
  );
}
