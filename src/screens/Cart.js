import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';


import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';

class Cart extends Component {
  render() {
    
    if (!this.props.cartItems.length) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Card>
          <Heading>Cart</Heading>
        </Card>
      </Container>
    );
  }
}

export default Cart;
