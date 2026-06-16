import { useState, useEffect } from 'react';

export function usePokemon() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
      const data = await res.json();
      setAllPokemon(data.results);
    };
    
    fetchAll().catch(console.error);
  }, []);

  return { 
    allPokemon, 
    visibleCount, 
    loadMore: () => setVisibleCount((c) => c + 20) 
  };
}