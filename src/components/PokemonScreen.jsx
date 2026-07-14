export default function PokemonScreen({ mysteryPokemon, isRevealed }) {
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <div className="w-8 h-8 bg-blue-400 border-4 border-black rounded-full shadow-inner"></div>
        <div className="w-3 h-3 bg-red-500 border-2 border-black rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center p-4 bg-gray-100 border-4 border-black shadow-inner h-72 rounded-t-xl rounded-bl-3xl">
        {mysteryPokemon ? (
          <img 
            src={mysteryPokemon.sprites.other['official-artwork'].front_default} 
            alt="mystery" 
            className={`w-52 h-52 transition-all duration-500 drop-shadow-xl ${isRevealed ? '' : 'brightness-0'}`}
          />
        ) : (
          <div className="text-sm font-bold text-center text-gray-400 font-mono">
            Awaiting Data... <br /> Press START below
          </div>
        )}
      </div>
    </div>
  );
}
