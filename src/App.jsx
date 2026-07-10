import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Game from './pages/Game'

function App() {
  return (
    <BrowserRouter>
      <div 
        className="flex flex-col min-h-screen font-sans text-gray-900 bg-slate-50 selection:bg-blue-500 selection:text-white"
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }}
      >
        
        <nav className="p-4 bg-blue-600 border-b-8 border-black shadow-md">
          <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
            <h1 className="text-xl font-extrabold tracking-wider text-black">
              <Link to="/">POKÉMON EXPLORER</Link>
            </h1>
            <div className="font-bold space-x-6 drop-shadow-[1px_1px_0_#000]">
              <Link to="/" className="transition-colors hover:text-gray-900">Home</Link>
              <Link to="/pokedex" className="transition-colors hover:text-gray-900">Pokédex</Link>
              <Link to="/game" className="transition-colors hover:text-gray-900">Play Quiz</Link>
            </div>
          </div>
        </nav>

        <main className="flex-col grow w-full max-w-5xl p-6 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  )
}

export default App