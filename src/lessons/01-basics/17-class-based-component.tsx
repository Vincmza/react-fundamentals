/*
 * 17-class-based-component
 *
 * Les composants a base de classe sont l'ancienne façon de créer des composants avant React v16.8.
 */

// Exemple

import React from "react";

class BasicUsage extends React.Component {
  render() {
    return <div id="header">Hello React</div>;
  }
}

// Exemple 2

interface Props {
  name: string
}

interface State {
  count: number
}

class WithStateAndProps extends React.Component<Props, State> {

  state: State = {
    count: 0
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <p>User name is : {this.props.name}</p>
        <button onClick={() => this.increment()}>
          Clicked {this.state.count} times
        </button>
      </>
    );
  }
}
