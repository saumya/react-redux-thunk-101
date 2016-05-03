//
import {ActionNames} from '../util/AppConstants'

function testCallAPI() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

export const dummyAPIAction = (username,password) => {
  console.log('actions : loginAction :',username,password);
  return function (dispatch) {
    return testCallAPI().then(
      success => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

export const loginAction = (username,password) => {
  console.log('actions : loginAction :',username,password);
  return {
    type: ActionNames.LOG_IN,
    username: username,
    password: password
  }
}

let nextTodoId = 0
export const addTodo = (text1,text2) => {
  console.group('actions : index : addTodo');
  console.log('text1',text1,' : text2',text2)
  console.groupEnd();
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text1,
    phone: text2
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
