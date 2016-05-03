//
import React from 'react'
import { connect } from 'react-redux'
//import { addTodo } from '../actions'

let Dummy = ({ dispatch }) => {
  var uName,uPassword ;
  var that = this ;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        console.group("Dummy : '%s'", 'Dummy');
        console.log('Dummy');
        console.log(dispatch);
        console.log('Dummy : Submit : uName', uName.value.trim());
        console.log('Dummy : Submit : uPassword', uPassword.value.trim());
        console.groupEnd();

        if (!uName.value.trim() || !uPassword.value.trim() ) {
          return
        }

        //dispatch(addTodo(uName.value,uPassword.value))
        //uName.value = uPassword.value = ''
      }}>
        <input ref={node1 => { uName = node1 }} />
        <input ref={node2 => { uPassword = node2 }} />
        <button type="submit"> Dummy </button>
      </form>
    </div>
  )
}

Dummy = connect()(Dummy)
export default Dummy
