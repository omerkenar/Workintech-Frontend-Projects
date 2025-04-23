import { Switch, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './components/Products';
import SideBar from './components/SideBar';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './components/Layout.css';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="content-section">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <SideBar />
            <Products />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <Footer />
      <LocationDisplay />
    </>
  );
}

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default App;
