import _ from "lodash"
import Pokemon from "pokemon"
import PokemonImages from "pokemon-images"
import React, { useState } from "react"
import WelcomeBox from "../components/WelcomeBox"
import InfoBox from "../components/InfoBox"
import PokemonCard from "../components/PokemonCard"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/index.css"

export default function Home() {
  const pokemonNames = Pokemon.all()
  const [searchName, setSearchName] = useState("")

  const getSpriteURL = name => {
    try {
      return PokemonImages.getSprite(name)
    } catch (err) {
      return PokemonImages.getSprite(pokemonNames[0])
    }
  }
  const showPokemon = () => {
    const filteredNames = _.filter(pokemonNames, pokemonName =>
      pokemonName.match(searchName)
    )
    const length = filteredNames.length
    if (length !== 1) {
      return _.range(0, filteredNames.length / 2).map(num => {
        const names = [filteredNames[2 * num], filteredNames[2 * num + 1]]
        const spriteURLs = _.map(names, name => getSpriteURL(name))
        return (
          <div className="row" key={num.toString()}>
            <WelcomeBox>
              <PokemonCard name={names[0]} spriteURL={spriteURLs[0]} />
            </WelcomeBox>
            <WelcomeBox>
              <PokemonCard name={names[1]} spriteURL={spriteURLs[1]} />
            </WelcomeBox>
          </div>
        )
      })
    } else {
      return (
        <WelcomeBox>
          <PokemonCard
            name={filteredNames[0]}
            spriteURL={getSpriteURL(filteredNames[0])}
          />
        </WelcomeBox>
      )
    }
  }

  const handleChange = event => {
    const pokemonName = event.target.value
    setSearchName(pokemonName)
  }

  return (
    <React.Fragment>
      <header className="app-heading">
        <h1> Pokedex </h1>
      </header>
      <div className="container">
        <div className="row" style={{ backgroundColor: "red", padding: "3px" }}>
          <InfoBox style={{ overflowY: "scroll", width: "100%" }}>
            <input
              className="search-box"
              placeholder="Search Pokemons"
              onChange={handleChange}
            />
            {showPokemon()}
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
