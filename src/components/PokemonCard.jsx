export default function PokemonCard({ pokemon }) {
  const parts = pokemon.url.split('/');
  const id = parts[parts.length - 2];

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="flex flex-col items-center p-4 transition-all duration-300 bg-white border border-gray-200 cursor-pointer rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-1">
      <img 
        src={imageUrl}
        alt={pokemon.name}
        className="object-contain w-24 h-24 mb-4 drop-shadow-sm"
      />
      <h3 className="text-lg font-bold text-gray-900 capitalize">{pokemon.name}</h3>
      <p className="font-mono text-sm text-gray-500">#{String(id).padStart(3, '0')}</p>
    </div>
  );
}