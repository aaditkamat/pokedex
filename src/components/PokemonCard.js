import React from "react"
import "../css/PokemonCard.css"
const PokemonCard = ({ name, spriteURL }) => {
  return (
    <React.Fragment>
      <img src={spriteURL} alt="Bulbusaur" />
      <div> {name} </div>
    </React.Fragment>
  )
}

export default PokemonCard
