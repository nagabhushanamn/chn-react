import React from 'react';
import './App.css';
import ActionBox from './components/ActionBox';
import Box from './components/Box';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import A from './components/A'

function App() {
  return (
    <div className="container">
      <hr />
      <h1>React Learn : v2</h1>
      <hr />
      <A color={"red"} />
      <A color={"green"} />
      <A color={"blue"} />
      <hr />
      <Box >
        <Veg />
        <Veg />
        <Veg />
      </Box>
      <Box>
        <NonVeg />
        <NonVeg />
      </Box>
      <Box>
        <h1>One</h1>
        <h1>Two</h1>
      </Box>
      <hr />
      <ActionBox />
    </div>
  );
}

export default App;
