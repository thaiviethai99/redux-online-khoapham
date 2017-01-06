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
var reducer = require('reducer');
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));
store.subscribe(() => {
  var str = store.getState();
});
module.exports = store;
