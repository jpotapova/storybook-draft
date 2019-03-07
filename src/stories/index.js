import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';


import '../index.css';

import Button from '../components/Button';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Happy from '../components/Happy';

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




// 1. Button requires additional setup
// storiesOf('Button', module)
//   .add('simple', () => <Button destination="/">Simple button</Button>);

// card - to do with decorator or background addon



  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ));

// import { Button, Welcome } from '@storybook/react/demo';
//
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
