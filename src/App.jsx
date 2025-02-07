import { Routes, Route } from 'react-router'
import Bg from './components/Bg.jsx'
import Navbar from './components/Navbar.jsx'
import Cursor from './components/cursor.jsx'
import Landing from './pages/Landing.jsx'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import JumpToTopButton from './components/JumpToTopButton.jsx'
function App() {
  return (
    <div className='text-primary'>
      <JumpToTopButton />
      <Bg />
      <Cursor />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/contact-me'
          element={<Contact />}
        />
        <Route
          path='/project/:projectId'
          element={<ProjectPage />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
