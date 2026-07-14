import { useState } from 'react';
import PokemonScreen from '../components/PokemonScreen';
import Controls from '../components/Controls';

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
    
    if (e && e.preventDefault) e.preventDefault(); 
    
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
    <div className="flex flex-col items-center justify-center max-w-4xl gap-4 mx-auto mt-10 md:flex-row md:items-stretch md:gap-2">
    
      <div className="flex flex-col justify-between w-full p-6 bg-red-600 border-8 border-black md:w-1/2 rounded-2xl shadow-[8px_8px_0_0_#000]">
        <PokemonScreen 
          mysteryPokemon={mysteryPokemon} 
          isRevealed={isRevealed} 
        />
        <Controls 
          checkGuess={checkGuess} 
          mysteryPokemon={mysteryPokemon} 
          isRevealed={isRevealed} 
          handleNextOrGiveUp={handleNextOrGiveUp} 
        />
      </div>

      <div className="flex flex-col justify-between w-full p-6 mt-0 bg-red-600 border-8 border-black md:w-1/2 rounded-2xl shadow-[8px_8px_0_0_#000] md:mt-12">
        
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
        </div>

        <div className="flex justify-center gap-4 mt-6 mb-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-3 h-16 border-2 border-black rounded-full shadow-inner bg-gray-900"></div>
          ))}
        </div>

      </div>
      
    </div>
  );
}