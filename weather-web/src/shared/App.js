import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Forecast } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/forecast/:lat/:lon' component={Forecast} />
      </div>
    );
  }
}

export default App;
