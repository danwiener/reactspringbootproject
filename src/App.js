import React from 'react'
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
