import React, { Component } from 'react';

class Price extends Component {
  render() {
    return (
      <span>
        &euro; {this.props.children}
      </span>
    );
  }
}

export default Price;
