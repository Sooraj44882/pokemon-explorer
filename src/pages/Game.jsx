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
    <div className="p-8 mt-10 bg-white border-4 border-black rounded-xl max-w-xl mx-auto shadow-[8px_8px_0_0_#000]">
      <h2 className="text-3xl font-extrabold text-center uppercase mb-6 drop-shadow-[1px_1px_0_#000]">
        Who's That Pokémon?
      </h2>
      
      <div className="text-center">
        
       
        {mysteryPokemon ? (
          <div className="flex flex-col items-center mb-6">
            <img 
              src={mysteryPokemon.sprites.other['official-artwork'].front_default} 
              alt="mystery" 
              className={`w-64 h-64 transition-all duration-500 drop-shadow-xl ${isRevealed ? '' : 'brightness-0'}`}
            />
          
            <p className="mt-4 font-mono text-2xl font-bold uppercase text-green-600 h-8">
              {isRevealed ? `It's ${mysteryPokemon.name}!` : "???"}
            </p>
          </div>
        ) : (
          <div className="w-64 h-64 mx-auto mb-6 bg-gray-200 border-4 border-dashed border-gray-400 animate-pulse rounded-xl flex items-center justify-center">
            <span className="font-bold text-gray-400">Click start to play</span>
          </div>
        )}

        <form onSubmit={checkGuess} className="flex gap-2 justify-center mb-6">
          <input 
            type="text" 
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={isRevealed || !mysteryPokemon}
            placeholder="Type your guess..."
            className="px-4 py-2 font-mono font-bold border-4 border-black focus:outline-none focus:bg-yellow-100 disabled:bg-gray-200"
          />
          <button 
            type="submit"
            disabled={isRevealed || !mysteryPokemon}
            className="px-4 py-2 font-bold text-white uppercase bg-red-600 border-4 border-black hover:bg-red-500 disabled:opacity-50"
          >
            Guess
          </button>
        </form>

        <button 
          onClick={handleNextOrGiveUp}
          className="px-6 py-3 font-bold text-black uppercase bg-yellow-400 hover:bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none transition-all"
        >
          {!mysteryPokemon ? "Start Game" : isRevealed ? "Next Pokémon" : "Give Up"}
        </button>
        
      </div>
    </div>
  );
}