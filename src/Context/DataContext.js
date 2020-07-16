import React, { Component } from "react";

<<<<<<< HEAD
export const DataContext = React.createContext({
  email: "",
=======
const DataContext = React.createContext({
  email: {},
>>>>>>> ff8cfadd90b884c4b2b2b9c64420ef5b3513b2f3
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
