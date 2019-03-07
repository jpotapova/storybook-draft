import React, { Component } from 'react';

import Heading from '../components/Heading';
import Price from '../components/Price';
import Star from '../components/Star';
import Card from '../components/Card';

class CartItem extends Component {
  render() {
    const { product, last } = this.props;
    
    return (
      <li className={last ? 'list__item list__item_last' : 'list__item'}>
        <div className="list__star">
          <Star show={product.star}/>
        </div>
        <div className="list__title">{product.title}</div>
        <div className="list__star">
          <Price>{product.price}</Price>
        </div>
      </li>
    );
  }
}

export default CartItem;
