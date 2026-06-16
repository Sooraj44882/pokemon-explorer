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
    <div className="w-full max-w-5xl mx-auto bg-red-600 border-8 border-black rounded-3xl p-6 shadow-[12px_12px_0_0_#000] mb-10 mt-4">
      
      <div className="flex items-start gap-4 mb-6 border-b-4 border-black pb-6">
        <div className="w-16 h-16 bg-blue-500 border-4 border-black rounded-full shadow-inner"></div>
        <div className="w-4 h-4 bg-red-500 border-2 border-black rounded-full mt-2"></div>
        <div className="w-4 h-4 bg-yellow-400 border-2 border-black rounded-full mt-2"></div>
        <div className="w-4 h-4 bg-green-500 border-2 border-black rounded-full mt-2"></div>
      </div>

      <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest drop-shadow-[2px_2px_0_#000] mb-6 pl-2">
        Pokédex
      </h2>

      <div className="bg-gray-100 border-4 border-black rounded-xl p-4 sm:p-6 mb-6">
        
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search database..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 font-mono font-bold text-black bg-white border-4 border-black focus:outline-1 focus:bg-yellow-100"/>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {displayList.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>

        {displayList.length === 0 && (
          <p className="mt-8 font-mono font-bold text-center text-gray-500">
            No Pokémon found.
          </p>
        )}
      </div>

      {!search && displayList.length > 0 && (
        <div className="flex justify-center mt-2">
          <button 
            onClick={loadMore}
            className="px-8 py-3 font-bold text-black uppercase bg-yellow-400 border-4 border-black rounded-full shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 active:translate-y-2 active:shadow-none transition-all"
          >Load More
          </button>
        </div>
      )}
    </div>
  );
}