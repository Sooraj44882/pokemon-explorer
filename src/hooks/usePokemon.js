import { useState, useEffect } from 'react';

export function usePokemon() {
  //  state to hold data
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [loading, setLoading]=useState(false);

  const fetchPokemon=async()=>{
    if(!nextUrl || loading) return;

    setLoading(true);
    try{
      const res=await fetch(nextUrl);
      const data=await res.json();

      setPokemonList((prev) => {
        const uniqueNewPokemon = data.results.filter(
          (newPoke) => !prev.some((prevPoke) => prevPoke.name === newPoke.name)
        );
        return [...prev, ...uniqueNewPokemon];
      });
      
      setNextUrl(data.next);
    } catch (err) {
      console.error("Failed to fetch pokemon:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (pokemonList.length===0){
      fetchPokemon();
    }
  }, []);

  return { pokemonList,
    loadMore:fetchPokemon,
    loading,
    hasMore:!!nextUrl
   };
}