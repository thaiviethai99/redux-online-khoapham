var redux = require('redux');
var defaulState = {
  mang: ['Android', 'iOS', 'NodeJS'],
  isAdding: false
}
var reducer = (state = defaulState, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding}
    default:
    return state;
  }
}

var store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'TOGGLE_IS_ADDING'});

console.log(store.getState());
