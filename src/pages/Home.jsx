import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 text-center">
      <h1 className="mb-6 text-5xl font-extrabold text-red-600 drop-shadow-sm">
        Pokémon Explorer
      </h1>
      
      <p className="max-w-md mb-8 text-xl text-gray-600">
        Your ultimate companion for exploring the Pokémon universe and testing your knowledge!
      </p>
      
      <div className="flex space-x-4">
        <Link to="/pokedex" className="px-8 py-3 font-bold text-white transition-transform transform bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:-translate-y-1">
          Open Pokédex
        </Link>
        <Link to="/game" className="px-8 py-3 font-bold text-white transition-transform transform bg-red-500 rounded-full shadow-md hover:bg-red-600 hover:-translate-y-1">
          Play Quiz
        </Link>
      </div>
    </div>
  )
}