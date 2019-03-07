import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Main from '../components/Main';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Happy from '../components/Happy';

class Success extends Component {
  render() {

    if (!this.props.products.length) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Card padded>
          <Heading>Success</Heading>
        </Card>
        <Main>
          <Happy />
          <Footer align="center">
            <Button destination="/">
              Select more products
            </Button>
          </Footer>
        </Main>
      </Container>
    );
  }
}

export default Success;
