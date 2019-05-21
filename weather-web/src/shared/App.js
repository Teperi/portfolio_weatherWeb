import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Forecast, NoMatch } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/forecast/:lat/:lon' component={Forecast} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
