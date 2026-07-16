import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 border-b-8 border-black shadow-md">
      <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
        
        <h1 className="text-2xl font-extrabold tracking-wider text-white drop-shadow-[2px_2px_0_#000]">
          <Link to="/">POKÉMON EXPLORER</Link>
        </h1>
        
        <div className="font-bold space-x-6 drop-shadow-[1px_1px_0_#000]">
          <Link to="/" className="text-white transition-colors hover:text-yellow-300">Home</Link>
          <Link to="/pokedex" className="text-white transition-colors hover:text-yellow-300">Pokédex</Link>
          <Link to="/game" className="text-white transition-colors hover:text-yellow-300">Play Quiz</Link>
        </div>
        
      </div>
    </nav>
  );
}
