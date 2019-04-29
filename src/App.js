import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Admin from './pages/admin';
import Cart from './pages/cart';
import Store from './pages/store';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Store} />
        <Route path="/store" component={Store} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
    </Router>
    </div>
  );
}

export default App;
