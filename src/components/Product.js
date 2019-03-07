import React, { Component } from 'react';

import Heading from '../components/Heading';
import Price from '../components/Price';
import Star from '../components/Star';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__heading">
          <div><Price>{this.props.product.price}</Price></div>
          <Star show={this.props.product.star}/>
        </div>
        <div className="product__body">
          <Heading size={2}>{this.props.product.title}</Heading>
        </div>
      </div>
    );
  }
}

export default Product;
