import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import PokemonSearch from '../components/PokemonSearch';
import PokemonModal from '../components/PokemonModal';

export default function Pokedex() {
  const { allPokemon, visibleCount, loadMore } = usePokemon();
  const [search, setSearch]=useState('');
  const [activePokemon, setActivePokemon] = useState(null);

  const results = allPokemon.filter((p) => 
    p.name.includes(search.toLowerCase())
  );
  const displayList = search ? results : results.slice(0, visibleCount);

  const handleCardClick = async (name) => {
    try {
    
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
      const speciesData = await speciesRes.json();

      const englishEntry = speciesData.flavor_text_entries.find(e => e.language.name === 'en');
      const cleanText = englishEntry ? englishEntry.flavor_text.replace(/[\n\f\r]/g, ' ') : "No data.";

      setActivePokemon({ ...data, description: cleanText });
    } catch (err) {
      console.log("Error fetching stats:", err);
    }
  };
  const playAudio = () => {
    if (activePokemon?.cries?.latest) {
      const audio = new Audio(activePokemon.cries.latest);
      audio.play();
    }
  };

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
        <PokemonSearch onSearch={(cleanedQuery) => setSearch(cleanedQuery)} />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {displayList.map((p) => (
            
            <div key={p.name} onClick={() => handleCardClick(p.name)} className="cursor-pointer hover:-translate-y-1 transition-transform">
              <PokemonCard pokemon={p} />
            </div>
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
            className="px-8 py-3 font-bold text-black uppercase bg-yellow-400 border-4 border-black rounded-full shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 active:translate-y-2 active:shadow-none transition-all cursor-pointer"
          >Load More
          </button>
        </div>
      )}

      <PokemonModal 
        activePokemon={activePokemon}
        onClose={() => setActivePokemon(null)}
        onPlayCry={playAudio}
      />
  
    </div>
  );
}