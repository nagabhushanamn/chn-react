
import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super();
        console.log('Greeting :: constructor()')
    }
    render() {
        console.log('Greeting :: render()')
        return (
            <div>
                <div className="alert alert-info">
                    <p>{this.props.message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
            </div>
        );
    }
}

export default Greeting;