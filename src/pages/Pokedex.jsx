import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
  const { allPokemon, visibleCount, loadMore } = usePokemon();
  const [search, setSearch]=useState('');
  const results = allPokemon.filter((p) => 
    p.name.includes(search.toLowerCase())
  );
  const displayList = search ? results : results.slice(0, visibleCount);

  return (
    <div className="w-full bg-white">
      <h2 className="text-4xl font-bold text-black mb-8 text-center mt-6 ">
        The Pokédex
      </h2>
      
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search any Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {displayList.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
      {!search && displayList.length > 0 && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={loadMore}
            className="px-8 py-3 font-bold text-white transition-transform bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:-translate-y-1"
          >
            Load More Pokémon
          </button>
        </div>
      )}
    </div>
  );
}