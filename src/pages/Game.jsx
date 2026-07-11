import { useState } from "react";

export default function Game(){
  const[mysteryPokemon,setMysteryPokemon]=useState(null);

  const fetchRandomPokemon = async () => {
    try {

      const randomId = Math.floor(Math.random() * 151) + 1;

      const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data=await res.json();

      console.log(data.name);
      setMysteryPokemon(data);
    }catch(err){
      console.log("error",err);
    }
  };

  return(
    
    <div className="p-8 mt-10 bg-white border-4 border-black rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Who's That Pokémon?
      </h2>
      
      <div className="text-center">
        <button 
          onClick={fetchRandomPokemon}
          className="px-4 py-2 bg-blue-500 text-white font-bold border-2 border-black"
        >
           Pokémon
        </button>

        {mysteryPokemon && (
          <div className="flex flex-col items-center">
           
            <img 
              src={mysteryPokemon.sprites.other['official-artwork'].front_default} 
              alt="mystery" 
              className="w-48 h-48"
            />
          
          <p className="mt-2 font-mono text-lg font-bold uppercase text-gray-500">
              {mysteryPokemon.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}