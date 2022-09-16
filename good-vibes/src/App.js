import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Baseball from './pages/Baseball';
import Football from './pages/Football';
import Hockey from './pages/Hockey';



function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
     <Route path='/' element={<Main />} />
     <Route path='/baseball' element={<Baseball />} />
     <Route path='/football' element={<Football />} />
     <Route path='/hockey' element={<Hockey />} />
     </Routes>
    </div>
  );
}

export default App;
