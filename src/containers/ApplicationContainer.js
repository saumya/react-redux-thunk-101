//
/*
import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductsContainer />
        <hr/>
        <CartContainer />
      </div>
    )
  }
}
*/


// Root Component
/*
// ref : https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
Type 1:
function App(props) {
  return <div>Hello {props.name}</div>;
}

Type 2:
const App = (props) => <div>Hello {props.name}</div>;
*/
// Component as pure function
import React from 'react'
const App = () => (
  <div>
    Welcome to React-Redux-Thunk 101
  </div>
)

export default App
