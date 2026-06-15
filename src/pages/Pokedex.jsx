import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
  const { pokemonList,loadMore,loading,hasMore } = usePokemon();
  const [search, setSearch]=useState('');

  const filtered= pokemonList.filter((p)=>
  p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full bg-white">
      <h2 className="text-4xl font-bold text-black mb-8 text-center mt-6 ">
        The Pokédex
      </h2>
      
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search loaded Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-gray-500 text-lg">
          No Pokémon found matching "{search}".
        </div>
      )}

      {hasMore && !search && (
        <div className="flex justify-center mt-10">
          <button 
            disabled={loading}
            onClick={loadMore}
            className="px-8 py-3 font-bold text-white transition-all bg-blue-600 rounded-full shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
          >
            {loading ? 'Loading...' : 'Load More Pokémon'}
          </button>
        </div>
      )}
    </div>
  );
}

