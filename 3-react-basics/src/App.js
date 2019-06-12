import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'

class App extends React.Component {
  state = {
    message: 'greetings'
  }
  constructor(props) {
    super();
    console.log(props)
    console.log('App :: constructor()')
  }
  changeMessage(message) {
    this.setState({ message: message }) // it triggers diffing on virtual-dom
  }
  render() {
    console.log('App :: render()')
    // this.props.title="New title"// ny default all props are read-only
    return (
      <div className="container">
        <hr />
        <h1>{this.props.title} - <small>{this.props.trainer}</small></h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <hr />

        <Greeting message={this.state.message}/>

      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  //title: 'Unknown',
  trainer: 'Anonymous'
}

export default App; // public
