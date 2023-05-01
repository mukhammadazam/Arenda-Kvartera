import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
