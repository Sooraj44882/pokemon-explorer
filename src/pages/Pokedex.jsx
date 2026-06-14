import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
  const { pokemonList,loadMore,loading,hasMore } = usePokemon();

  return (
    <div className="w-full bg-white">
      <h2 className="text-4xl font-bold text-black mb-8 text-center mt-6 ">
        The Pokédex
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {pokemonList.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
        <button 
          disabled={loading}
          onClick={loadMore}
          className="px-8 py-3 font-bold text-white transition-all bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
        >
          {loading ? 'Loading...' : 'Load More Pokémon'}
        </button>
        </div>
      )}
    </div>
  );
}