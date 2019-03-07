import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Main from '../components/Main';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Price from '../components/Price';
import Star from '../components/Star';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { products } = this.props;
    const productsCount = products.length;

    if (!productsCount) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Card padded>
          <Heading>Cart</Heading>
        </Card>
        <Main>
          <Card>
            <ul className="list">
              {products.map((product, index) => (
                <CartItem key={product.id} last={productsCount === index + 1} product={product}/>
              ))}
            </ul>
          </Card>
          <Footer>
            <Button destination="/" enabled>
              Select more products
            </Button>
            <Button destination="/success" enabled>
              Checkout
            </Button>
          </Footer>
        </Main>
      </Container>
    );
  }
}

export default Cart;
