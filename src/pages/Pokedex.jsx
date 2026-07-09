import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';

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
            className="px-8 py-3 font-bold text-black uppercase bg-yellow-400 border-4 border-black rounded-full shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 active:translate-y-2 active:shadow-none transition-all"
          >Load More
          </button>
        </div>
      )}

      {activePokemon && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setActivePokemon(null)}
        >
          <div 
            className="w-full max-w-xl p-6 bg-red-600 border-4 border-black rounded-lg"
            onClick={(e) => e.stopPropagation()}  
          >
           
            <div className="p-4 mb-4 bg-white border-4 border-black rounded">
              <img 
                src={activePokemon.sprites.other['official-artwork'].front_default} 
                alt={activePokemon.name}
                className="w-32 h-32 mx-auto drop-shadow-md"
              />
            
            <div className="p-3 mb-4 bg-[#9bbc0f] border-4 border-black rounded shadow-inner">
              <p className="font-mono text-sm font-bold text-black leading-relaxed">
                "{activePokemon.description}"
              </p>
            </div>
            
              <h3 className="text-2xl font-bold text-center capitalize text-black mt-2">
                {activePokemon.name}
              </h3>
              
              <div className="flex justify-center gap-2 mt-2">
                {activePokemon.types.map((t) => (
                  <span key={t.type.name} className="px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded">
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>

          
            <div className="p-4 font-mono text-sm bg-white border-4 border-black rounded text-black">
              <div className="flex justify-between mb-2">
                <p>HT: {activePokemon.height / 10}m</p>
                <p>WT: {activePokemon.weight / 10}kg</p>
              </div>
              
              <div className="mb-2 text-xs uppercase border-b-2 border-black pb-2">
                <span className="font-bold">Abilities: </span>
                {activePokemon.abilities.map(a => a.ability.name.replace('-', ' ')).join(', ')}
              </div>

              
              <div className="pt-2 mt-2 border-t-2 border-green-800">
                {activePokemon.stats.map((s) => (
                  <div key={s.stat.name} className="flex justify-between">
                    <span className="uppercase">{s.stat.name}</span>
                    <span>{s.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={playAudio}
              className="w-full py-2 mt-4 font-bold text-white uppercase bg-blue-500 border-4 border-black hover:bg-blue-400 active:translate-y-1 shadow-[2px_2px_0_0_#000]"
            >
               Play Cry
            </button>

            <button 
              onClick={() => setActivePokemon(null)}
              className="w-full py-2 mt-4 font-bold text-black uppercase bg-yellow-400 border-4 border-black hover:bg-yellow-300 active:translate-y-1 shadow-[2px_2px_0_0_#000]"
            >
              Close
            </button>
          </div>
        </div>
      )}
  
    </div>
  );
}