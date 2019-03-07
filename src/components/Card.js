import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className={this.props.padded ? 'card card_padded' : 'card'}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
