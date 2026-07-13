import { useState } from "react";

export default function Game(){
  const[mysteryPokemon,setMysteryPokemon]=useState(null);
  const [guess, setGuess] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);

  const fetchRandomPokemon = async () => {
    try {
      setIsRevealed(false);
      setGuess('');

      const randomId = Math.floor(Math.random() * 151) + 1;
      const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data=await res.json();

      console.log("poke", data.name); 
      setMysteryPokemon(data);
    }catch(err){
      console.log("error",err);
    }
  };

  const checkGuess = (e) => {
    e.preventDefault(); 
    
    if (!mysteryPokemon) return;

    const userGuess = guess.toLowerCase().trim();
    const actualName = mysteryPokemon.name.toLowerCase();

    if (userGuess === actualName) {
      setIsRevealed(true);
    } else {
      alert("Pika pika pika , Wrong! Try again."); 
    }
  };

  const handleNextOrGiveUp = () => {
    if (!mysteryPokemon) {
      fetchRandomPokemon(); 
    } else if (!isRevealed) {
      setIsRevealed(true); 
    } else {
      fetchRandomPokemon(); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center max-w-4xl mx-auto mt-10 gap-4 md:gap-2">
      
      <div className="w-full md:w-1/2 bg-red-600 border-8 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000]">
        
        <div className="bg-gray-100 border-4 border-black rounded-t-xl rounded-bl-3xl p-4 mb-4 h-80 flex flex-col items-center justify-center shadow-inner">
          {mysteryPokemon ? (
            <>
              <img 
                src={mysteryPokemon.sprites.other['official-artwork'].front_default} 
                alt="mystery" 
                className={`w-56 h-56 transition-all duration-500 drop-shadow-xl ${isRevealed ? '' : 'brightness-0'}`}
              />
            </>
          ) : (
            <div className="font-bold text-gray-400">Click Start on the right</div>
          )}
        </div>
        <div className="w-10 h-10 bg-black rounded-full"></div>
      </div>
      <div className="w-full md:w-1/2 bg-red-600 border-8 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#000] flex flex-col justify-center mt-0 md:mt-12">
        <div className="bg-[#9bbc0f] border-4 border-black rounded-lg p-4 mb-6 shadow-inner min-h-25 flex items-center justify-center">
          <p className="font-mono text-xl font-bold uppercase text-black text-center">
             {isRevealed ? `It's ${mysteryPokemon?.name}!` : "Who's That Pokémon?"}
          </p>
        </div>

        <form onSubmit={checkGuess} className="flex flex-col gap-4 mb-6">
          <input 
            type="text" 
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={isRevealed || !mysteryPokemon}
            placeholder="Enter name..."
            className="w-full px-4 py-3 font-mono font-bold border-4 border-black focus:outline-none focus:bg-yellow-100 disabled:bg-gray-300"
          />
          <button 
            type="submit"
            disabled={isRevealed || !mysteryPokemon}
            className="w-full py-3 font-bold text-white uppercase bg-blue-500 border-4 border-black hover:bg-blue-400 disabled:opacity-50 shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none"
          >
            Guess
          </button>
        </form>

        <button 
          onClick={handleNextOrGiveUp}
          className="w-full py-3 font-bold text-black uppercase bg-yellow-400 hover:bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none transition-all"
        >
          {!mysteryPokemon ? "Start Game" : isRevealed ? "Next Pokémon" : "Give Up"}
        </button>
        
      </div>
    </div>
  );
}