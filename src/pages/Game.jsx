import { useState } from 'react';
import PokemonScreen from '../components/PokemonScreen';
import Controls from '../components/Controls';
import GuessForm from '../components/GuessForm';

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
        <GuessForm 
          guess={guess}
          setGuess={setGuess}
          isRevealed={isRevealed}
          mysteryPokemon={mysteryPokemon}
          checkGuess={checkGuess}
        />
      </div>
      
    </div>
  );
}