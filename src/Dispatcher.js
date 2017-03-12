/**
 * Created by yejia_alice on 2017/3/12.
 */
/**
 * Dispathcer的优点：分离Store与Action解耦，加入新功能
 * @type {Array}
 */
const storeCallbackList = [];
const middlewareList = [];
module.exports = {
  // 添加中间件
  use(middleware) {
    middlewareList.push(middleware);
    return this;
  },

  register(storeCallback) {
    storeCallbackList.push(storeCallback);
  },

  // 先调用中间件
  dispatch(action) {
    let index = -1;
    let that = this;
    function next() {
      // 适用于异步的，按顺序执行的
      const middle = middlewareList[++index];
      if (middle) {
        middle(action, next);
      } else {
        that._dispatch(action);
      }
    }
    next();
  },

  // 最后调用私有的
  _dispatch(action) {
    for (let callback of storeCallbackList) {
      callback(action);
    }
  }

};