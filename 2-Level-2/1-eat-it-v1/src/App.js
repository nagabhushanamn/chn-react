import React from 'react';
import classNames from 'classnames'

class App extends React.Component {
  state = {
    currentTab: 1,
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
  changeTab(e, tabIndex) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }
  renderTabPanel(item) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: return (<div>{item.description}</div>)
      case 2: return (<div>Not Yet</div>)
      case 3: return (<div>None yet</div>)
      default: return null;
    }
  }
  renderItems() {
    let { items, currentTab } = this.state;
    return items.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.image} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              <button disabled={!item.canBuy} className="btn btn-primary btn-sm">buy</button>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Ingre</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">eat-IT</a>
        </nav>
        <hr />
        <hr />

        {this.renderItems()}

      </div>
    );
  }
}

export default App;
