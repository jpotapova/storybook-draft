import React, { Component } from 'react';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';

class Cart extends Component {
  render() {
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
