import React, { Component } from 'react';

import './Action.css'

class Action extends Component {
    state = {
        count: 0
    }
    increment() {
        let { count } = this.state
        count += 1;
        this.setState({ count })
        let { onAction, value } = this.props;
        if (onAction) {
            onAction({ v: value * count })
        }
    }
    render() {
        let { count } = this.state;
        let { value } = this.props;
        let className = value < 0 ? 'btn btn-danger' : 'btn btn-success';
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.increment()} className={className}>{value}</button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;