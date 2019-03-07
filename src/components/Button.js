import React, { Component } from 'react';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Button extends Component {

  render() {
    return (
      <Link to={this.props.destination} className="button">
        {this.props.children}
      </Link>
    );
  }
}

export default Button;
