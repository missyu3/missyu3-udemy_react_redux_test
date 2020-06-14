//JSXを使用する場合は下記のReactをimportは必須
import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Alics", age: 3}
  ]
  return (
    <div>
      {
        profiles.map((profiles,index) => {
          return <User name = {profiles.name} age = {profiles.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.PropTypes = {
  name: PropTypes.string,
  //isRequiredを宣言すると属性がない場合もWarningが発生する。
  age: PropTypes.number.isRequired
}

export default App;
