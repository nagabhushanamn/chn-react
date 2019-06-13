
import React, { Component } from 'react';

import store from '../store'

class CommentList extends Component {
    constructor(props) {
        super()
        this.state = {
            comments: store.getState().comments['java']
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            //.. get new state
        })
    }
    componentWillUnmount() {
        // unsubscribe
    }
    someCommonLogic() {
        //..
    }

    renderComments() {
        let { comments } = this.state;
        return comments.map((comment, idx) => {
            return (
                <li key={idx} className="list-group-item">{comment}</li>
            )
        })
    }

    render() {
        return (
            <div className="card card-body" style={{ backgroundColor: '#DEF' }}>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

export default CommentList;