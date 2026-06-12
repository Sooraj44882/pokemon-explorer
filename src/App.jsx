import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 font-sans selection:bg-yellow-400 selection:text-slate-900 flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="bg-slate-800 border-b border-slate-700 p-4 shadow-lg">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-bold text-yellow-400 tracking-wider">
              <Link to="/">POKÉMON EXPLORER</Link>
            </h1>
            <div className="space-x-6 text-slate-300 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/pokedex" className="hover:text-white transition-colors">Pokédex</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="grow w-full max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
           
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  )
}

export default App