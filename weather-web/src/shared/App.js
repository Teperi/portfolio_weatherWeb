import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Forecast, Test } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/forecast/:lat/:lon' component={Forecast} />
        <Route path='/test' component={Test} />
      </div>
    );
  }
}

export default App;
