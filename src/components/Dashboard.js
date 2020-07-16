import React, { useContext, Component } from "react";
import DataContext from "../Context/DataContext";
import config from "../config";

class Dashboard extends Component {
  static contextType = DataContext;

  componentDidMount() {
    console.log(this.context.state.email);
    fetch(`${config.API_ENDPOINT}/${this.context.state.email}`).then(
      ([res]) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));

        return Promise.all([res.json()]);
      }
    );
  }

  render() {
    return <h1>This is the dashboard</h1>;
  }
}

export default Dashboard;
