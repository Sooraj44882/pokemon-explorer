export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-md mb-6">
        Pokémon Explorer 
      </h1>
      
      <p className="text-xl text-slate-300 mb-8 max-w-md">
        Your ultimate companion for exploring the Pokémon universe and testing your knowledge!
      </p>
      
      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          Open Pokédex
        </button>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          Play Quiz
        </button>
      </div>
    </div>
  )              
}                                                   