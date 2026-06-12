import { usePokemon } from '../hooks/usePokemon';

export default function Pokedex() {
  // We call our new hook here!
  const { pokemonList } = usePokemon();

  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <h2 className="text-4xl font-bold text-white mb-4">The Pokédex</h2>
      <p className="text-slate-400">
        console- fetched {pokemonList.length} Pokémon.
      </p>
    </div>
  )
}