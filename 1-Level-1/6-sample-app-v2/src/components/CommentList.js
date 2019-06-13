
import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../connect'
import { withStyle } from '../withStyle'



class CommentList extends Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         comments: store.getState().comments['java']
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

    renderComments() {
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return (
                <li key={idx} className="list-group-item">{comment}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments['java']
    }
}

// export default connect(CommentList, mapStateToProps);


let C1 = connect(CommentList, mapStateToProps);
let C2 = withStyle(C1);

export default C2;