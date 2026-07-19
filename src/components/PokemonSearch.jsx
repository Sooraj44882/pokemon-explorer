import { useState } from 'react';

export default function PokemonSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSearch(query.toLowerCase().trim());
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative grow">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Pokémon by name or ID..."
            className="w-full px-4 py-3 font-mono font-bold text-sm bg-white border-4 border-black shadow-[4px_4px_0_0_#000] focus:outline-none focus:bg-yellow-50 transition-all placeholder:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 font-mono font-black text-sm uppercase bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-y-0.5 active:shadow-none hover:bg-yellow-300 transition-all"
        >
          Search
        </button>
      </form>
    </div>
  );
}