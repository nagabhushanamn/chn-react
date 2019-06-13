
import React, { Component } from 'react';

import store from '../store'

class TopicList extends Component {
    constructor() {
        super()
        this.state = {
            topics: store.getState().topics
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

    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return (
                <li key={idx} className="list-group-item">{topic}</li>
            )
        })
    }

    render() {
        return (
            <div className="card card-body">
                <ul>
                    {this.renderTopics()}
                </ul>
            </div>
        );
    }
}

export default TopicList;