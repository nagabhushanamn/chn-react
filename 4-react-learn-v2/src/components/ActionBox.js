import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary'

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incerementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.v;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, 2, 3, -4, -8, 9];
        return numbers.map((number, idx) => {
            return <Action key={idx} value={number} onAction={e => this.incerementTotalCount(e)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActionBox : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {/* 
                    <Action value={10} onAction={e => this.incerementTotalCount(e)} />
                    <Action value={-10} onAction={e => this.incerementTotalCount(e)} /> 
                    */}
                    {this.renderActions()}
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <Summary value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;