var redux = require('redux');
// var defaulState = {
//   mang: ['Android', 'iOS', 'NodeJS'],
//   isAdding: false
// }
// var reducer = (state = defaulState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_IS_ADDING':
//       return {...state, isAdding: !state.isAdding}
//     case 'ADD_ITEM':
//       return {...state, mang: [...state.mang, action.item]}
//     case 'REMOVE_ITEM':
//       return {...state, mang: state.mang.filter((e, i) => i != action.index)}
//     default:
//       return state;
//   }
// }

var mangReducer = (state = ['Android', 'iOS', 'NodeJS'], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i != action.index)
    default:
      return state;
  }
}

var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  mang: mangReducer,
  isAdding: isAddingReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));
store.subscribe(() => {
  var str = store.getState();
});

store.dispatch({type: 'TOGGLE_IS_ADDING'});

store.dispatch({
  type: 'ADD_ITEM',
  item: 'Unity'
});

store.dispatch({
  type: 'REMOVE_ITEM',
  index: 1
});

module.exports = store;
