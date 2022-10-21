import logo from './logo.svg';
import './App.css';

import Home from './components/Pages/Home';
import Games from './components/Pages/Games';
import Rating from './components/Pages/Rating';
import CasikPage from './components/Pages/CasikPage';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/rating" element={<Rating/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/games/123456"  element={<CasikPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
