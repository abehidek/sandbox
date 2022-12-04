import { Component } from "preact";

interface FirstComponentProps {}

interface FirstComponentState {
  count: number;
}

class FirstComponent extends Component<
  FirstComponentProps,
  FirstComponentState
> {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }

  // no need to bind it on the constructor because its an arrow function
  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <>
        <p>Counter inside a class, counter: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default FirstComponent;
