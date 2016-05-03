//
import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'

let LoginContainer = ({ dispatch }) => {
  var uName,uPassword ;
  var that = this ;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        console.group("LoginContainer : '%s'", 'Login');
        console.log('LoginContainer');
        console.log(dispatch);
        console.log('LoginContainer : Submit : uName', uName.value.trim());
        console.log('LoginContainer : Submit : uPassword', uPassword.value.trim());
        console.groupEnd();

        if (!uName.value.trim() || !uPassword.value.trim() ) {
          return
        }

        //dispatch(addTodo(uName.value,uPassword.value))
        //uName.value = uPassword.value = ''
      }}>
        <input ref={node1 => { uName = node1 }} />
        <input ref={node2 => { uPassword = node2 }} />
        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

LoginContainer = connect()(LoginContainer)
export default LoginContainer
