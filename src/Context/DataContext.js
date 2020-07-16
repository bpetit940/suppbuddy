import React, { Component } from "react";

const DataContext = React.createContext({
  email: "",
  error: null,
  setEmail: () => {},
});

export default DataContext;

export class DataProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      email: "",
      error: null,
      setEmail: () => {},
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
      error: this.state.error,
      setEmail: this.setEmail,
    };

    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
