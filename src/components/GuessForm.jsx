export default function GuessForm({ guess, setGuess, isRevealed, mysteryPokemon, checkGuess }) {
  return (
    <div>
      
      <div className="bg-[#9bbc0f] border-4 border-black rounded-lg p-4 mb-4 shadow-inner min-h-20 flex items-center justify-center">
        <p className="text-lg font-bold leading-tight text-center text-black uppercase font-mono">
           {isRevealed ? `It's ${mysteryPokemon?.name}!` : "Who's That Pokémon?"}
        </p>
      </div>

      <div className="grid grid-cols-5 gap-1 mb-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-6 border-2 border-black rounded shadow-sm bg-blue-400"></div>
        ))}
      </div>

      <form onSubmit={checkGuess} className="flex flex-col gap-3 mb-4">
        <label className="text-xs font-bold text-black uppercase font-mono">
          Database Search Link:
        </label>
        <input 
          type="text" 
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={isRevealed || !mysteryPokemon}
          placeholder="Type guess & hit Enter..."
          className="w-full px-4 py-3 text-sm font-bold border-4 border-black font-mono focus:outline-none focus:bg-yellow-100 disabled:bg-gray-300 shadow-inner"
        />
      </form>

      <div className="flex justify-center gap-4 mt-6 mb-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-3 h-16 border-2 border-black rounded-full shadow-inner bg-gray-900"></div>
        ))}
      </div>
    </div>
  );
}