import { Routes, Route } from 'react-router'
import Bg from './components/Bg.jsx'
import Navbar from './components/Navbar.jsx'
import Cursor from './components/cursor.jsx'
import Landing from './pages/Landing.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='text-primary'>
      <Bg />
      <Cursor />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
