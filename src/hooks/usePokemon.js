import { useState, useEffect } from 'react';

export function usePokemon() {
  //  state to hold data
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // function goes to the internet and gets the first 20 Pokemon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {
        console.log("Here is the raw data:", data.results);
        setPokemonList(data.results);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return { pokemonList };
}