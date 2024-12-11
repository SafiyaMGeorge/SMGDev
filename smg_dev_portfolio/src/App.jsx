import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Projects from './pages/Projects';



function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
