import React, { Component } from 'react';

import Container from '../components/Container';
import Card from '../components/Card';
import Heading from '../components/Heading';

class Delivery extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Heading>Delivery details</Heading>
        </Card>
      </Container>
    );
  }
}

export default Delivery;
