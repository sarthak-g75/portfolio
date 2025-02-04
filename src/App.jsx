import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Cursor from './components/cursor.jsx'
import Landing from './pages/Landing.jsx'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen bg-accent -z-10'>
        <div className='flex justify-between '>
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className='w-[1px] h-screen bg-primary opacity-5'
            ></div>
          ))}
        </div>
      </div>
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
