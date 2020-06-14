//JSXを使用する場合は下記のReactをimportは必須
import React from 'react';

function App() {
    return (
      <React.Fragment>
        <label htmlFOr="bar">bar</label>
        <input type="text" onClick={()=>{console.log("I am clicked")}} />; 
      </React.Fragment>
    ) 
}
export default App;
