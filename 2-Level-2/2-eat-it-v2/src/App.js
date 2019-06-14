import React from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item';
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';

class App extends React.Component {
  state = {
    isCartOpen: false,
    cart: {},
    items: [
      {
        id: 111,
        name: 'Veg',
        price: 170,
        canBuy: true,
        image: 'images/veg1.png',
        description: 'veg is yummy'
      },
      {
        id: 222,
        name: 'NonVeg',
        price: 160,
        canBuy: true,
        image: 'images/non-veg1.png',
        description: 'non-veg yummy too'
      }
    ]
  }

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
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
    let { isCartOpen, cart } = this.state;
    if (isCartOpen)
      return <CartView value={cart} />
  }
  renderItems() {
    let { items, isCartOpen } = this.state;
    if (!isCartOpen)
      return items.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Item value={item} onBuy={e => this.addToCart(e)} />
          </div>
        )
      })
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCart(e)} className="nav-link" href="/">{isCartOpen ? 'Items' : 'Cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderCart()}
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
