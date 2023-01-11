import React, { useEffect }  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import Categories from './pages/categories/categories.component';
import Footer from './components/Footer/footer.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Registration from './pages/registration/registration';
import Admin from './pages/Admin/admin';
import Recovery from './pages/recovery/recovery';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Terms from './pages/Terms/terms';
import Order from './pages/Order';
import Search from './pages/Search';
import NotFound from './pages/NotFound/notfound';
import Livrare from './pages/Livrare/livrare';
import Metode from './pages/Metode/metode';
import Cookies from './pages/Cookies/cookies';
import Confidentialitate from './pages/Confidentialitate/confidentialitate';
import AdminToolbar from './components/AdminToolbar/admin.component';
import { checkUserSession } from './redux/user/user.actions';
import { useDispatch } from 'react-redux';
import ReactGA from 'react-ga';
import CookieConsent from "react-cookie-consent";

import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

const App = () => {

  const dispatch = useDispatch();
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <AdminToolbar />
      <Header />
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/terms" component={Terms} />
        <Route path="/livrare" component={Livrare} />
        <Route path="/metode" component={Metode} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/confidentialitate" component={Confidentialitate} />
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
        <Route component={NotFound} />
      </Switch>
      <CookieConsent
        location="bottom"
        buttonText="Sunt de acord"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Pentu a imbunatati experienta dumneavoastra de utilizare a acestui site, Casa Royal foloseste fisiere de tip cookie.{" "}
        <Link to='/cookies'><span style={{ fontSize: "10px", color: 'white' }}>Mai multe detalii</span></Link>
      </CookieConsent>
      <Footer />
    </div>
  );
}

export default App;
