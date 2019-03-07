import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './screens/Home';
import Cart from './screens/Cart';
import Delivery from './screens/Delivery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Burokėlių sriuba su rūkytu šonkauliu",
          price: "1.90",
          cart: false,
        },
        {
          id: 2,
          title: "Kreminė aitri pomidorų sriuba",
          price: "1.70",
          cart: false,
        },
        {
          id: 3,
          title: "Kijevo kepsnys su bulvių piure ir šviežiomis daržovėmis",
          price: "5.20",
          cart: false,
        },
        {
          id: 4,
          title: "Lėtai keptas jautienos sprandinės kepsnys su orkaitėje keptomis bulvėmis ir burokėlių salotomis",
          price: "5.40",
          cart: false,
        },
        {
          id: 5,
          title: "Pica su Milano saliamiu (25 cm)",
          price: "4.80",
          cart: false,
        },
        {
          id: 6,
          title: "Salotos su Gorgonzola sūriu, ant žarijų keptais persikais ir balzamiko padažu",
          price: "4.80",
          cart: false,
        }
      ],
    };
  }

  toggleProduct = (id) => {
    const products = this.state.products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    this.setState({ products });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact path="/"
            render={
              props => (
                <Home {...props}
                  products={this.state.products}
                  toggleProduct={this.toggleProduct}
                />
              )
            }
          />
          <Route
            path="/cart"
            render={props => <Cart {...props} products={this.state.products} />}
          />
          <Route
            path="/delivery"
            render={props => <Delivery {...props} products={this.state.products} />}
          />
        </div>
      </Router>
    );

  }
}

export default App;
