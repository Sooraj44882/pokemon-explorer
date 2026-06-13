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
    </div>
  )
}