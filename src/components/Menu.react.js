//
'use strict';

import React, {Component} from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var that = this;
    return (
      <ul>
        <li onClick={that._onClick}>Home</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    );
  }
  _onClick(){
    console.log('Home:_onClick');
  }
}
 export default Menu;
