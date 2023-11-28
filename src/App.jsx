
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Apple from './components/apple'
import Samsung from './components/samsung'
import Redmi from './components/redmi'
import Vivo from './components/vivo'


function App() {

  return (
     <div>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/apple' element={<Apple />} />
         <Route path='/samsung' element={<Samsung />} />
         <Route path='/redmi' element={<Redmi />} />
         <Route path='/vivo' element={<Vivo />} />
       </Routes>
     </div>
  )
}

export default App
