import React from 'react';
import Navbar from './components/Navbar'
import ItemList from './components/ItemList';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { loadCart } from './actions/cart'

import { connect } from 'react-redux'


class App extends React.Component {
  componentDidMount() {
    this.props.actions.loadCart('Nag')
  }
  renderCart() {
    return <CartView />
  }
  renderItems() {
    return <ItemList />
  }
  render() {
    return (
      <div className="container">
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge />
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
              <Route path="/items" render={() => this.renderItems()} />
              <Route path="/cart" render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

function mapDisptachToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadCart }, dispatch)
  }
}
export default connect(null, mapDisptachToProps)(App);
