import React from "react"
import "../css/PokemonCard.css"
const PokemonCard = ({ name, spriteURL, onClick }) => {
  return (
    <div className="pokemon-card">
      <img src={spriteURL} alt={name} onClick={onClick} />
      <div> {name} </div>
    </div>
  )
}

export default PokemonCard
