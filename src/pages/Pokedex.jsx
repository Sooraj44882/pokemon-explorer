import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
  const { pokemonList } = usePokemon();

  return (
    <div className="w-full pb-10">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center mt-6 drop-shadow-sm">
        The Pokédex
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <button className="bg-blue-600 hover:bg-blue-500 text-white text-center font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => console.log("Button clicked! , add logic later.")}>
        Load More Pokémon
      </button>
    </div>
  )
}