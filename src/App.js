import React from 'react';
import './App.css';
import Header from './comporents/Header/Header';
import Shop from './comporents/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './comporents/Review/Review';
import Inventory from './comporents/Inventory/Inventory';
import NotFound from './comporents/NotFound/NotFound';
import ProductDetail from './comporents/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
