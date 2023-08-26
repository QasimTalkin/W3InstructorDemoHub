import { useState } from "react";

let pokemonURl = "https://pokeapi.co/api/v2/pokemon"



const Pokemon = () => {
  let [pokemonNames, setPokemonNames] = useState(['Qasimon', 'Tomon', 'Solomon']);
  fetch(pokemonURl)
  .then((pokemonData)=>pokemonData.json())
  .then((data)=>{
    let newPoke = []
    data.results.map((item)=>newPoke.push(item.name))
    setPokemonNames(newPoke)
  })
  return ( <>
      <ul>
      {pokemonNames.map(item=>(<li>{item}</li>))}
      </ul>
      {pokemonNames}
  </> );
}

export default Pokemon;
