
import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../connect';
import { withStyle } from '../withStyle'

class TopicList extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }

    // componentDidMount() {
    //     store.subscribe(() => {
    //         //.. get new state
    //     })
    // }

    // componentWillUnmount() {
    //     // unsubscribe
    // }
    // someCommonLogic() {
    //     //..
    // }

    renderTopics() {
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return (
                <li key={idx} className="list-group-item">{topic}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderTopics()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

let C1 = connect(TopicList, mapStateToProps);
let C2 = withStyle(C1);

export default C2;