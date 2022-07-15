import React, { useEffect }  from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Categories from './pages/categories/categories.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Registration from './pages/registration/registration';
import Recovery from './pages/recovery/recovery';
import { checkUserSession } from './redux/user/user.actions';
import { useDispatch } from 'react-redux';

import WithAuth from './hoc/withAuth';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="shop" component={ShopPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <Dashboard />
          </WithAuth>
        )} />
      </Switch>
    </div>
  );
}

export default App;
