/**
 * Created by yejia_alice on 2017/3/12.
 */
// const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');
// class Actions extends EventEmitter {
class Actions {
  constructor() {
    // super();
  }

  // 创建action
  add(name) {
    // WebAPI.add(name, function (err) {
    //   let action;
    //   if (!err) {
    //     action = {
    //       actionType: 'add',
    //       name,
    //     };
    //   } else {
    //     action = {
    //       actionType: 'addError',
    //       name,
    //     };
    //   }
    // });
    var action = {
      actionType: 'add',
      name,
    };

    // this.emit('create', action);
    Dispatcher.dispatch(action);
  }

  getAll() {

    // server
    WebAPI.getAll(function (data) {
      var action = {
        actionType: 'getAll',
        list: data,
      };

      Dispatcher.dispatch(action);
    });
  }
}

module.exports = Actions;
