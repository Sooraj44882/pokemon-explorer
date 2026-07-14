export default function Controls({ checkGuess, mysteryPokemon, isRevealed, handleNextOrGiveUp }) {
  return (
    <div className="flex items-center justify-between px-2 mt-6">
      
      <div className="flex items-end gap-4">

        <div className="flex flex-col items-center">
            <button 
            onClick={checkGuess}
            disabled={isRevealed || !mysteryPokemon}
            className="w-12 h-12 bg-gray-900 border-2 border-gray-600 rounded-full shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50 cursor-pointer hover:bg-gray-800"
          ></button>
          <span className="mt-1 text-xs font-bold text-black uppercase">Submit</span>
        </div>

        <div className="flex flex-col gap-3 pb-1">
          <div className="w-10 h-3 border border-black rounded-full bg-red-800 shadow-[2px_2px_0_0_#000]"></div>
          <div className="flex flex-col items-center">
            <button 
            onClick={handleNextOrGiveUp}
              className="w-10 h-3 bg-blue-800 rounded-full border border-black shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none hover:bg-blue-500 transition-all cursor-pointer"
            ></button>
            <span className="text-[10px] font-bold mt-1 text-black uppercase leading-none">
              {!mysteryPokemon ? "Start" : isRevealed ? "Next" : "Give Up"}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-20 h-20 group">
        <div className="absolute w-6 bg-gray-900 border-4 border-black rounded-sm h-16 group-hover:bg-gray-800 transition-colors"></div>
        <div className="absolute h-6 bg-gray-900 border-4 border-black rounded-sm w-16 group-hover:bg-gray-800 transition-colors"></div>
        <div className="absolute z-10 w-4 h-4 bg-gray-900 group-hover:bg-gray-800 transition-colors"></div>
      </div>
      
    </div>
  );
}