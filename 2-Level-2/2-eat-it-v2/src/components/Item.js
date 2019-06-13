import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';


class Item extends Component {
    state = {
        currentTab: 1,
        reviews: [
            { stars: 3, author: 'who@mail.com', body: 'this is not good' },
            { stars: 5, author: 'who@mail.com', body: 'this is too good' }
        ]
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(item) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (<div>{this.renderReviews()}</div>)
            default: return null;
        }
    }
    handleBuy() {
        let { value: item, onBuy } = this.props;
        if (onBuy) {
            onBuy({ item })
        }
    }
    render() {
        let { value: item } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img src={item.image} className="img-fluid" alt={item.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h5>{item.name}</h5>
                        <h6>&#8377;{item.price}</h6>
                        <button onClick={e => this.handleBuy(e)} disabled={!item.canBuy} className="btn btn-primary btn-sm">buy</button>
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
        );
    }
}

export default Item;