import React, { Component } from "react";

const DataContext = React.createContext({
  email: "",
  setEmail: () => {},
});

export default DataContext;

export class DataProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      email: "",
    };
    this.state = state;
  }

  setEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  render() {
    const value = {
      email: this.state.email,
    };

    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
