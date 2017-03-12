/**
 * Created by yejia_alice on 2017/3/12.
 */

const React = require('react');
const Store = require('./Store');
const Actions = require('./Actions');
const actions = new Actions();
const store = new Store();
//  Top level component, container and controller-view

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // 统一化action
  add() {
  //  pseudo code
  //  store._add(this.refs.nameInput.value);
  //   Actions.add(this.refs.nameInput.value);
  // action -> dispatch -> store
    actions.add(this.refs.nameInput.value);
  }
  
  componentDidMount() {
    actions.getAll();
    // 监听store的change事件
    store.on('change', list=>{
      this.setState({
        list,
      });
    });
  }

  render() {
    return <ul>
      {this.state.list.map(item=><li>{item}</li>)}

      <li>
        <input ref="nameInput" />
        <button onClick={this.add.bind(this)}>add</button>
      </li>
    </ul>
  }
}

module.exports = List;