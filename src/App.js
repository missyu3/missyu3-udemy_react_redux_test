//JSXを使用する場合は下記のReactをimportは必須
import React from 'react';
/* 
function App() {
    return (
      <React.Fragment>
        <label htmlFOr="bar">bar</label>
        <input type="text" onClick={()=>{console.log("I am clicked")}} />; 
      </React.Fragment>
    ) 
}
 */
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Meow!</div>
}

export default App;
