import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './pages/categories/categories.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
