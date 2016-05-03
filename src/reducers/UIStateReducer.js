// written and Example Reducer which does nothing
const UIStateReducer = (state="", action) => {
  console.group('reducers : UIStateReducer : UIStateReducer');
  console.log('UIStateReducer : action',action);
  console.log('UIStateReducer : state',state);
  var newState = state;
  console.log('UIStateReducer : newState',newState);
  console.groupEnd();

  return newState;
}

export default UIStateReducer
