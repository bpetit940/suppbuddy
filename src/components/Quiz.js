import React, { useContext, Component } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
class Quiz extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      Vitamins,
      Protein,
      Digestion,
      Metabolism,
      Superfoods,
      Skin,
      Herbs,
    } = e.target;
    const payload1 = {
      vitamins: Vitamins.checked ? "1" : "0",
      protein: Protein.checked ? "1" : "0",
      digestion: Digestion.checked ? "1" : "0",
      metabolism: Metabolism.checked ? "1" : "0",
      superfoods: Superfoods.checked ? "1" : "0",
      skin: Skin.checked ? "1" : "0",
      herbs: Herbs.checked ? "1" : "0",
    };
  };
  render() {
    return (
      <div className="quiz-container">
        <h1>Supplement Personalization Quiz</h1>
        <form className="quiz" onSubmit={this.handleSubmit}>
          <label>What areas of nutrition of interest to you?</label>
          <br />
          <input
            type="checkbox"
            value="Vitamins, Minerals, and Other Supplements"
            name="Vitamins"
          />
          <label>Vitamins, Minerals, and Other Supplements</label>
          <br />
          <input
            type="checkbox"
            value="Protein and Performance Supplements"
            name="Protein"
          />
          <label>Protein and Performance Supplements</label>
          <br />
          <input
            type="checkbox"
            value="Digestions and Detox Supplements"
            name="Digestion"
          />
          <label>Digestions and Detox Supplements</label>
          <br />
          <input
            type="checkbox"
            value="Metabolism and Weight Loss"
            name="Metabolism"
          />
          <label>Metabolism and Weight Loss</label>
          <br />
          <input
            type="checkbox"
            value="Superfoods and Groceries"
            name="Superfoods"
          />
          <label>Superfoods and Groceries</label>
          <br />
          <input type="checkbox" value="Skin and Beauty" name="Skin" />
          <label>Skin and Beauty</label>
          <br />
          <input
            type="checkbox"
            value="Herbs and Natural Remedies"
            name="Herbs"
          />
          <label>Herbs and Natural Remedies</label>
          <br />
          <br />
          <label>
            How much money are you willing to dedicate to purchasing
            supplements?
          </label>
          <select>
            <option value="50" name="money">
              $50
            </option>
            <option value="100" name="money">
              $100
            </option>
            <option value="200" name="money">
              $200
            </option>
            <option value="201" name="money">
              Whatever is needed to optimize my results
            </option>
          </select>
          <br />
          <br />
          <label>How much do you weigh?</label>
          <input type="number" name="weight" />
          <br />
          <br />
          <label>How tall are you?</label>
          <input type="number" name="height" />
          <br />
          <br />
          <label>How active are you on a regular basis?</label>
          <select>
            <option value="none" name="activity">
              Not active (Sedentary)
            </option>
            <option value="some" name="activity">
              Some activity (working out 1-2 times a week)
            </option>
            <option value="medium" name="activity">
              Moderate activity (working out 2-3 times a week)
            </option>
            <option value="high" name="activity">
              High activity (working out 4+ times a week)
            </option>
          </select>
          <button type="submit">Submit Quiz</button>
        </form>
      </div>
    );
  }
}
export default Quiz;
