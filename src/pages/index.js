import _ from "lodash"
import PokemonNames from "pokemon"
import PokemonImages from "pokemon-images"
import React, { useState } from "react"
import WelcomeBox from "../components/WelcomeBox"
import InfoBox from "../components/InfoBox"
import PokemonCard from "../components/PokemonCard"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/index.css"

export default function Home() {
  const [numCards, setNumCards] = useState(10)

  return (
    <React.Fragment>
      <header className="app-heading">
        <h1> Pokedex </h1>
      </header>
      <div className="container">
        <div className="row" style={{ backgroundColor: "red", padding: "3px" }}>
          <InfoBox style={{ overflowY: "scroll", width: "100%" }}>
            <input className="search-box" placeholder="Search Pokemons" />
            {_.range(0, numCards, 2).map(num => {
              const names = [
                PokemonNames.getName(2 * num + 1),
                PokemonNames.getName(2 * num + 2),
              ]
              return (
                <div className="row" key={num.toString()}>
                  <WelcomeBox>
                    <PokemonCard
                      name={names[0]}
                      spriteURL={PokemonImages.getSprite(names[1])}
                    />
                  </WelcomeBox>
                  <WelcomeBox>
                    <PokemonCard
                      name={names[1]}
                      spriteURL={PokemonImages.getSprite(names[1])}
                    />
                  </WelcomeBox>
                </div>
              )
            })}
          </InfoBox>
          <InfoBox>
            <WelcomeBox style={{ marginTop: "8.5em" }}>
              <strong> Welcome to the pokedex </strong>
            </WelcomeBox>
          </InfoBox>
        </div>
      </div>
    </React.Fragment>
  )
}
