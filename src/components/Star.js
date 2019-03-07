import React, { Component } from 'react';

class Star extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    
    return (
      <span>&#9733;</span>
    );
  }
}

export default Star;
