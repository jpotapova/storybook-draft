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
    return (
      <Container>
        <Card padded>
          <Heading>Products</Heading>
        </Card>
        <Main>
          <ul className="grid">
            {this.props.products.map((product, index) => (
              <li className="grid__item" key={product.id}>
                <Card onClick={() => { this.props.toggleProduct(product.id) }}>
                  <Product product={product} />
                </Card>
              </li>
            ))}
          </ul>
          <Footer>
            <Button destination="/cart">
              View cart
            </Button>
          </Footer>
        </Main>
      </Container>
    );
  }
}

export default Home;
