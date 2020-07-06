import React, { useContext, Component } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
class Quiz extends Component {
  render() {
    return (
      <div className="quiz-container">
        <h1>Supplement Personalization Quiz</h1>
        <form>
          <label>Question 1</label>
          <input type="radio" value="Option" />
          <label>Option</label>
          <input type="radio" value="Option" />
          <label>Option</label>
          <input type="radio" value="Option" />
          <label>Option</label>
          <input type="radio" value="Option" />
          <label>Option</label>
          <input type="radio" value="Option" />
          <label>Option</label>
        </form>
      </div>
    );
  }
}
export default Quiz;
