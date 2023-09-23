import { useEffect } from 'react';
import { useState } from 'react'
import fetchPokemonData from '../data.jsx'
import Card from './Card.jsx'

function Game() {
    const [pokemon, setPokemon] = useState([]);
    const [score, setScore] = useState(0);
    const [chosenPokemon,setChosenPokemon] = useState([]);
    const [highScore, sethighScore] = useState(0);
    
    const gridWidth = 4;
    const gridHeight = 3;

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchPokemonData();
                setPokemon(data);
            } catch (error) {
                console.error('Failed to fetch pokemon:', error);
            }
        })()
    }, [])

    function handleClick(e, species) {
        setPokemon(prevPokemon => shuffleArray([...prevPokemon]));
        if (!chosenPokemon.includes(species)) {
            setScore(prevScore => prevScore + 1);
            setChosenPokemon(prevChosenPokemon => [...prevChosenPokemon, species]);
        } else {
            if (score > highScore){
                sethighScore(score);
            }
            setScore(0);
            setChosenPokemon([]);
        }
    }

    console.log(chosenPokemon);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            const j = Math.floor(Math.random() * (i + 1));
    
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const boardStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
        gridTemplateRows: `repeat(${gridHeight}, 1fr)`,
        gap: "8px 8px"

    }

    return (
        <>
            <div>High Score: {highScore}</div>
            <div className="score">Score: {score}</div>
            <div className="Board" style={boardStyle}>
                {pokemon.map(({species, imageURL}) => {
                    return <Card key={species} 
                                species={species} 
                                imageURL={imageURL} 
                                onClick={(e) => handleClick(e, species)}/>
                })}
            </div>
        </>
        
    )
}

export default Game