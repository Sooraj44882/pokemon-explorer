export default function PokemonSearch({ 
  search, 
  setSearch, 
  selectedType, 
  setSelectedType, 
  selectedRegion,
  setSelectedRegion
}) {
  const types = [
    'all', 'normal', 'fire', 'water', 'grass', 'electric', 'ice', 
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 
    'rock', 'ghost', 'dragon', 'steel', 'fairy'
  ];

  const regions = [
    { name: 'All Regions', value: 'all' },
    { name: 'Kanto (1-151)', value: 'kanto' },
    { name: 'Johto (152-251)', value: 'johto' },
    { name: 'Hoenn (252-386)', value: 'hoenn' },
    { name: 'Sinnoh (387-493)', value: 'sinnoh' },
    { name: 'Unova (494-649)', value: 'unova' },
    { name: 'Kalos (650-721)', value: 'kalos' },
    { name: 'Alola (722-809)', value: 'alola' },
    { name: 'Galar (810-898)', value: 'galar' },
    { name: 'Paldea (906-1025)', value: 'paldea' }
  ];

  return (
    <div className="w-full mb-6 space-y-4">
  
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 font-mono font-bold text-black bg-white border-4 border-black focus:outline-none focus:bg-yellow-100 shadow-[2px_2px_0_0_#000]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-bold">
        
        <div className="flex items-center gap-2">
          <label className="uppercase text-black">Region:</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-3 py-2 bg-white border-2 border-black uppercase font-mono cursor-pointer shadow-[2px_2px_0_0_#000] focus:outline-none"
          >
            {regions.map((r) => (
              <option key={r.value} value={r.value}>{r.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="uppercase text-black">Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 bg-white border-2 border-black uppercase font-mono cursor-pointer shadow-[2px_2px_0_0_#000] focus:outline-none"
          >
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}