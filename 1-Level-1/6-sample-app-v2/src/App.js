import React from 'react';
import './App.css';
import TopicList from './components/TopicList'
import CommentList from './components/CommentList'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>sample-react-app - v1</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
          <TopicList />
        </div>
        <div className="col-12 col-sm-6 col-md-6">
          <CommentList />
        </div>
      </div>
    </div>
  );
}

export default App;
