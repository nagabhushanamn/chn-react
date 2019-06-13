import React from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item';
import CartBadge from './components/CartBadge';

class App extends React.Component {
  state = {
    cart: [],
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

  addToCart(e) {
    let { item } = e;
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Item value={item} onBuy={e => this.addToCart(e)} />
        </div>
      )
    })
  }
  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="eat-IT" />
        <hr />
        <CartBadge value={cart.length} />
        <hr />
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
