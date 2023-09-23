import { useState } from 'react'
import '../App.css'
import fetchPokemonData from '../data.jsx'
import Game from './Game.jsx'


function App() {

  return (
    <>
      <h2>Pokémon Memory Game</h2>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <Game />
    </>
  )
}

export default App
