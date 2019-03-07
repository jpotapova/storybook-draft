import React, { Component } from 'react';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Main from '../components/Main';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Product from '../components/Product';

class Home extends Component {
  render() {
    const { products, toggleProduct } = this.props;

    return (
      <Container>
        <Card padded>
          <Heading>Products</Heading>
        </Card>
        <Main>
          <ul className="grid">
            {products.map((product, index) => (
              <li className="grid__item" key={product.id}>
                <Product product={product} toggleProduct={toggleProduct}/>
              </li>
            ))}
          </ul>
          <Footer align="right">
            <Button destination="/cart" enabled={products.filter(product => product.cart).length}>
              View cart
            </Button>
          </Footer>
        </Main>
      </Container>
    );
  }
}

export default Home;
