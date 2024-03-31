import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<MusicPlayer />} path='/music_player'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
