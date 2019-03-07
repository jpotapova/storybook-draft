import React, { Component } from 'react';

import Heading from '../components/Heading';
import Price from '../components/Price';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__heading">
          <div><Price>{this.props.product.price}</Price></div>
          <div>star goes here</div>
        </div>
        <div className="product__body">
          <Heading size={2}>{this.props.product.title}</Heading>
        </div>
      </div>
    );
  }
}

export default Product;
