import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { align, children } = this.props;
    return (
      <div className={align ? `footer footer_${align}` : 'footer'}>
        {children}
      </div>
    );
  }
}

export default Footer;
