const EventEmitter = require('events').EventEmitter;
const Dispatcher = require('./Dispatcher');
class Store extends EventEmitter {
  // 根据不同action更改数据
  // constructor(actions) {
  //   actions.on('create', action=>{
  //     switch (action.actionType) {
  //       case 'add':
  //         this._add(action.name);
  //         break;
  //     }
  //   });
  //   super();
  //   this._list = [];
  // }

  // 使用Dispatcher
  constructor() {
    super();
    this._list = [];
    Dispatcher.register(action=>{
      switch (action.actionType) {
        case 'add':
          this._add(action.name);
          break;
        case 'getAll':
          this._list = action.list;
          this.emit('change', this.list);
          break;
      }
    });
  }

  // _add私有的方法
  _add(item) {
    this._list.push(item);
    this.emit('change', this.list); // 触发change事件
  }

  get list() {
    return this._list;
  }
}

module.exports = Store;