import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { loadReviews, addNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'
import ReviewForm from './ReviewForm';

class Item extends Component {
    state = {
        currentTab: 1,
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex }, () => {
            let id = this.props.value.id;
            this.props.actions.loadReviews(id);
        })
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    addNewReview(e) {
        let { review } = e;
        let { value, actions } = this.props;
        let { id } = value;
        actions.addNewReview(id, review)
    }
    renderTabPanel(item) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <ReviewForm onSubmit={e => this.addNewReview(e)} />
                </div>)
            default: return null;
        }
    }
    handleBuy() {
        let { value: item } = this.props;
        this.props.actions.buy(item, 1);
    }
    render() {
        let { value: item, qty } = this.props;
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
                        &nbsp;
                        <span className="badge badge-dark">{qty}</span>
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

// export default Item;


function mapStateToProps(state, props) {
    let { value } = props;
    let { id } = value;
    return {
        reviews: state.reviews[id] || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadReviews, addNewReview, buy }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)