import React from "react";

class App extends React.Component{
  state={
    count: 0
  };
  render(){
    //this.state: 현재 클래스에 선언한 state를 의미함.
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button>Add</button>
      <button>Minus</button>
    </div>;
  }
}

export default App;
