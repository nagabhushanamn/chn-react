import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary'

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incerementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActionBox : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    <Action value={10} onAction={e => this.incerementTotalCount()} />
                    <Action value={-10} onAction={e => this.incerementTotalCount()} />
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