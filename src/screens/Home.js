import React, { Component } from 'react';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Main from '../components/Main';

class Home extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Heading>Products</Heading>
        </Card>
        <Main>
          <ul className="grid">
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
            <li className="grid__item">
              <Card>
                <p>this is product card</p>
              </Card>
            </li>
          </ul>
        </Main>
      </Container>
    );
  }
}

export default Home;
