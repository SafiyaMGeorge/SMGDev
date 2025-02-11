import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Commission from './pages/Commission';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path="/About" element={<About />}/>
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Commission' element={<Commission />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
