import React from "react";
import './App.css';
import Glowny from './Glowny'
import CompClass from './CompClass.jsx';
import CompFunction from './CompFunction.jsx';


class App extends React.Component {
  render() {
    const title = 'ReactJS'

    return (
      <div className='card'>
        <h1>Hello {title}</h1>
        <CompClass />
        <CompFunction />
        <Glowny />

      </div>
    )
  }

}

export default App;
