import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import '../index.css';

import Button from '../components/Button';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Happy from '../components/Happy';
import Header from '../components/Header';
import Product from '../components/Product';
import CartItem from '../components/CartItem';

// 1. simplest example - Happy
storiesOf('Happy')
  .add('default', () => <Happy />);

// 2. component with 2 cases under one title
storiesOf('Heading')
  .add('default (h1)', () => <Heading>This is a default heading</Heading>)
  .add('h2', () => <Heading size={2}>This is an h2 heading</Heading>);

// 3. card component - needs a decorator to be useful
storiesOf('Card')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .add('default', () => <Card>This is a simple card</Card>)
  .add('padded', () => <Card padded>This is a padded card</Card>)
  .add('selected padded', () => <Card padded selected>This is a selected padded card</Card>)
  .add('clickable card', () => <Card padded selected onClick={() => {alert('clicked')}}>This is a clickable card</Card>);

// 4. Card component with knobs
storiesOf('Card story with knobs')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .addDecorator(withKnobs)
  .add('interactive', () => <Card padded selected={boolean('Selected', false)}>{text('Card content', 'Change me!')}</Card>)


// other
storiesOf('Header')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .add('basic', () => <Header>Hello world</Header>)

storiesOf('Product')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .add('product', () => (
    <Product
      product={{id: 1, title: "Sriuba", price: "1.60", star: true,}}
    />
  ));

storiesOf('Cart item')
  .addDecorator(storyFn => <div class="app"><div class="container"><Card>{storyFn()}</Card></div></div>)
  .add('regular', () => (
    <CartItem
      product={{id: 1, title: "Sriuba", price: "1.60", star: true,}}
    />
  ))
  .add('last', () => (
    <CartItem
      product={{id: 1, title: "Sriuba", price: "1.60", star: true,}}
      last
    />
  ))
