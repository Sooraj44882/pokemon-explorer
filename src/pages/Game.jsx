import { useState } from "react";

export default function Game(){
  const[mysteryPokemon,setMysteryPokemon]=useState(null);

  const testFetch=async()=>{
    try{
      const res=await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
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
          onClick={testFetch}
          className="px-4 py-2 bg-blue-500 text-white font-bold border-2 border-black"
        >
           Pokémon
        </button>

        {mysteryPokemon && (
          <p className="mt-4 font-mono text-green-600">
            Loaded: {mysteryPokemon.name}
          </p>
        )}
      </div>
    </div>
  );
}