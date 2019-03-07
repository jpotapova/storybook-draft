import React, { Component } from 'react';

import Heading from '../components/Heading';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__heading">
          <div>&euro; {this.props.product.price}</div>
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
