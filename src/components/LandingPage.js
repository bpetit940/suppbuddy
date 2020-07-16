import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
class LandingPage extends Component {
  state = {
    email: "",
    error: null,
    setEmail: () => {},
  };

  static contextType = DataContext;
  render() {
    return (
      <div className="landing-page">
        <h1 className="title">SuppBuddy</h1>
        <h3 className="tagline">
          People who supplement with a personalized stack realize their goals
          85% faster.
        </h3>
        <img
          src="https://www.vitafoodsinsights.com/sites/vitafoodsinsights.com/files/styles/article_featured_wide/public/07_18INS_WhySupplement_1540x800_v2-1_6.jpg?itok=AjqV0Mqa"
          alt="hero"
        />
        <h3 className="call-to-action">
          Take our quiz to learn about YOUR body's specific supplemental needs!
        </h3>
        <img
          src="http://blogs.uww.edu/fitfabandfine/files/2017/02/run.jpg"
          alt="hero"
        />
        <p>
          Through machine learning and specific nutrition algorithms, we have
          discovered the ideal formula for finding individuals' prime supplement
          stack to add on to your life routine. Beyond sport performance, anyone
          can benenfit from adding a stack to their diet.{" "}
        </p>
        <Link to="/quiz">Take the Quiz</Link>
      </div>
    );
  }
}
export default LandingPage;
