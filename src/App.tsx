import { Routes } from 'react-router'
import './App.css'
import MainLayout from './components/layouts/MainLayout'
import { Route } from 'react-router'
import Gallery from './components/pages/Gallery'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
