import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className={this.props.align ? `footer footer_${this.props.align}` : 'footer'}>
        {this.props.children}
      </div>
    );
  }
}

export default Footer;
