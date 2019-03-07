import React, { Component } from 'react';

class Heading extends Component {
  render() {
    const HeadingTag = `h${this.props.size || 1}`;

    return (
      <HeadingTag className={`heading heading_h${this.props.size || '1'} `}>
        {this.props.children}
      </HeadingTag>
    );
  }
}

export default Heading;
