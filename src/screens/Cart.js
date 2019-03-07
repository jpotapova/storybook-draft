import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Main from '../components/Main';
import Button from '../components/Button';
import Footer from '../components/Footer';

class Cart extends Component {
  render() {

    if (!this.props.cartItems.length) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Card padded>
          <Heading>Cart</Heading>
        </Card>
        <Main>
          <p>list of items</p>
          <Footer>
            <Button destination="/">
              Select more products
            </Button>
            <Button destination="/delivery">
              View delivery page
            </Button>
          </Footer>
        </Main>
      </Container>
    );
  }
}

export default Cart;
