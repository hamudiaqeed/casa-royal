import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './pages/categories/categories.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
