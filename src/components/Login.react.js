//
'use strict';
import React, {Component} from 'react'

class Login extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    var input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log('Login : Submit : ',input.value.trim());
          if (!input.value.trim()) {
            return
          }
          //dispatch(addTodo(input.value))
          //input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} defaultValue={"type here"}/>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default Login
