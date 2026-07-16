import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
        <Navbar />

        <main className="flex flex-col grow w-full max-w-5xl p-6 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App