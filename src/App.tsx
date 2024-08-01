import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Canvas from './Pages/Canvas';
import About from './Pages/About';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
              <Route index element={<About/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/canvas' element={<Canvas/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
