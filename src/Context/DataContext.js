import React, { Component } from "react";

export const DataContext = React.createContext({
  email: "",
  error: null,
  setEmail: () => {},
});

class DataProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      email: "",
      error: null,
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

export default DataProvider;
