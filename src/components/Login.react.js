//
'use strict';
import React, {Component} from 'react'

class Login extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    var uName,uPassword;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log('Login : Submit : uName', uName.value.trim());
          console.log('Login : Submit : uPassword', uPassword.value.trim());
          if (!uName.value.trim() || !uPassword.value.trim()) {
            return
          }
          //dispatch(addTodo(input.value))
          //input.value = ''
        }}>
          <input ref={node => { uName = node }} defaultValue={"user name"}/>
          <input ref={node => { uPassword = node }} defaultValue={"password"}/>
          <button type="register">
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default Login
