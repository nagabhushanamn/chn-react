import React from 'react';
import Navbar from './components/Navbar'
import ItemList from './components/ItemList';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class App extends React.Component {

  state = {
    cart: {},
  }

  addToCart(e) {
    let { item } = e;
    let { id } = item;
    let { cart } = this.state;
    let itemLine = cart[id];
    if (!itemLine) {
      itemLine = { item, qty: 1 }
    } else {
      itemLine = { item, qty: itemLine.qty + 1 }
    }
    cart = { ...cart, [id]: itemLine }
    this.setState({ cart })
  }

  renderCart() {
    let { cart } = this.state;
    return <CartView value={cart} />
  }
  renderItems() {
    return <ItemList onBuy={e => this.addToCart(e)} />
  }
  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">account</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/items" component={() => this.renderItems()} />
              <Route path="/cart" render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
