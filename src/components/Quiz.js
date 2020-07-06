import React, { useContext, Component } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
class Quiz extends Component {

  render() {
    return (
      <div className="quiz-container">
        <h1>Supplement Personalization Quiz</h1>
      </div>
    );
  }

};
export default Quiz;
