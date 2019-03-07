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

class Cart extends Component {
  render() {

    const productsCount = this.props.products.length;

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
              {this.props.products.map((product, index) => (
                <li class={productsCount === index + 1 ? 'list__item list__item_last' : 'list__item'}>
                  <div className="list__star"><Star show={product.star}/></div>
                  <div className="list__title">{product.title}</div>
                  <div className="list__star"><Price>{product.price}</Price></div>
                </li>
              ))}
            </ul>
          </Card>
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
