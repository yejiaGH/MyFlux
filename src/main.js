/**
 * Created by yejia_alice on 2017/3/12.
 */
const List = require('./List');
const ReactDOM = require('react-dom');
const React = require('react');
const Dispatcher = require('./Dispatcher');
// Dispatcher.use(function log(action, next) {
//   setTimeout(function () {
//     console.log('log------', action.actionType);
//     next();
//   }, 2000);
// }).use(function bzd(action, next) {
//   setTimeout(function () {
//     console.log('bzd------', action.actionType);
//     next();
//   }, 2000);
// });
ReactDOM.render(<List />, document.body);