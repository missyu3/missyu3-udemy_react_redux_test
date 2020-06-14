//JSXを使用する場合は下記のReactをimportは必須
//JSXとはBABELで変換されるトランスファイルでXML形式で記述することができる
//ComponentをReactからimportするために、{ Component }が必要
import React, { Component } from 'react';

//Counterコンポーネントを呼ぶ
const App = () => (<Counter></Counter>)

//A extends B AはBを継承している
class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    //stateを変更する場合にはsetStateを使用する。
    this.setState({ count: this.state.count + 1})
  }

  minusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
  
  return (
    <React.Fragment>
      <div>count: { this.state.count } </div>
      <button onClick={ this.handlePlusButton}>+1</button>
      <button onClick={ this.minusButton}>-1</button>
    </React.Fragment>
  )
  }
} 

export default App;
