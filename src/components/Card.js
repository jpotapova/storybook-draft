import React, { Component } from 'react';

class Card extends Component {
  render() {
    const CardTag = this.props.onClick ? 'a' : 'div';
    const classNames = ['card'];
    if (this.props.padded) classNames.push('card_padded');
    if (this.props.selected) classNames.push('card_selected');

    return (
      <CardTag
        className={classNames.join(' ')}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </CardTag>
    );
  }
}

export default Card;
