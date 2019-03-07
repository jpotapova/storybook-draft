import React, { Component } from 'react';

class Card extends Component {
  render() {
    const CardTag = this.props.onClick ? 'a' : 'div';

    return (
      <CardTag
        className={this.props.padded ? 'card card_padded' : 'card'}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </CardTag>
    );
  }
}

export default Card;
