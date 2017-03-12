/**
 * Created by yejia_alice on 2017/3/12.
 */
module.exports = {
  getAll(callback) {
    setTimeout(function () {
      callback(['aaa', 'bbb', 'ccc']); //localhost/data.json
    }, 2000);
  }
}