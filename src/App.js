import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './screens/Home';
import Cart from './screens/Cart';
import Delivery from './screens/Delivery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [""],
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route
            path="/cart"
            render={props => <Cart {...props} cartItems={this.state.cartItems} />}
          />
          <Route
            path="/delivery"
            render={props => <Delivery {...props} cartItems={this.state.cartItems} />}
          />
        </div>
      </Router>
    );

  }
}

export default App;
