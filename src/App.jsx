import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'/>
      </Routes>
    </div>
  )
}

export default App
