import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
// import './App.scss'
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:slug">
          <SingleProduct />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
