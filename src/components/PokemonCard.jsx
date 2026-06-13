export default function PokemonCard({pokemon}){
    //extraxt id
    const parts=pokemon.url.split('/');
    const id=parts[parts.length-2];

   const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

   return(
    <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg border border-slate-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
    <img 
    src={imageUrl}
    alt={pokemon.name}
    className="w-24 h-24 object-contain drop-shadow-md mb-4"
        />
    <h3 className="text-black capitalize font-bold text-lg">{pokemon.name}</h3>
    <p className="text-black font-mono text-sm">#{String(id).padStart(3, '0')}</p>
    </div>
   );
}