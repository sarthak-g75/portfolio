import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Cursor from './components/cursor.jsx'
import Landing from './pages/Landing.jsx'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen bg-accent -z-10'></div>
      <Cursor />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
      </Routes>
    </>
  )
}

export default App
