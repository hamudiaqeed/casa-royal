import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Categories from './pages/categories/categories.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="shop" component={ShopPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
