import React, { useEffect }  from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Categories from './pages/Categories/categories.component';
import Footer from './components/Footer/footer.component';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/Header/header.component';
import About from './pages/About/about.component';
import Contact from './pages/Contact/contact.component';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Registration from './pages/Registration/registration';
import Admin from './pages/Admin/admin';
import Recovery from './pages/Recovery/recovery';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Order from './pages/Order';
import Search from './pages/Search';
import AdminToolbar from './components/AdminToolbar/admin.component';
import { checkUserSession } from './redux/User/user.actions';
import { useDispatch } from 'react-redux';

import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <div className="App">
      <AdminToolbar />
      <Header />
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="shop" component={ShopPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/recovery" component={Recovery} />
        <Route exact path="/search" render={() => (
          <Search />
        )} />
        <Route path="/search/:filterType" render={() => (
          <Search />
        )} />
        <Route path="/product/:productID" render={() => (
          <ProductDetails />
        )} />
        <Route path="/cart" render={() => (
          <Cart />
        )} />
        <Route path="/payment" render={() => (
          <WithAuth>
            <Payment />
          </WithAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
