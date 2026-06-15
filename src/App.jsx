import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Game from './pages/Game'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50 selection:bg-red-500 selection:text-white">
        
        <nav className="p-4 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
            <h1 className="text-xl font-extrabold tracking-wider text-red-600">
              <Link to="/">POKÉMON EXPLORER</Link>
            </h1>
            <div className="font-medium space-x-6 text-gray-500">
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