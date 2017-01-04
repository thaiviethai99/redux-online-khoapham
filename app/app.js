var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');

ReactDOM.render(
    <List/>,
  document.getElementById('root')
);
var c = 100;
var add = (a, b) => {
  //a.d = 19
  //Async task
  //one input => 1 output
  return a + b
};

console.log(add(5, 6));

// var obj = {
//   name: 'KhoaPham',
//   age: 18
// }
//
// var obj2 = {...obj, age: 35};
//
// obj.age = 30;
// //console.log(obj2);
//
// var mang = [5, 3, 8, 5];
// var arr = [7, 6, ...mang, 9, 0];
// mang[0] = 1000;
// console.log('Array: ', arr);
// console.log('Mang: ', mang);
