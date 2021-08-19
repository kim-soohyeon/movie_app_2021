import React from "react";

class App extends React.Component{
  state={
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    //this.state: 현재 클래스에 선언한 state를 의미함.
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
  }

}

export default App;
