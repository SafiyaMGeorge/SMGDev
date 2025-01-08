import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
