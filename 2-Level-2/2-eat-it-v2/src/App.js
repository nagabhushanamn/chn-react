import React from 'react';
import Navbar from './components/Navbar'
import Item from './components/Item';

class App extends React.Component {
  state = {
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
        canBuy: false,
        image: 'images/non-veg1.png',
        description: 'non-veg yummy too'
      }
    ]
  }

  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Item value={item} />
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <Navbar title="eat-IT" />
        <hr />
        <hr />
        {this.renderItems()}
      </div>
    );
  }
}

export default App;
