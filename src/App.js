import './App.css';
import { Component } from 'react';
import { Dante } from './Dante.js'
import { Gigi } from './Gigi';

class App extends Component {
  render() {
    return (
    <div className='box'>
      <Dante />
      <Gigi />
    </div>
    )

  }
}

export default App;
