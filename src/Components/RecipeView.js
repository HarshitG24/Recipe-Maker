import { Component } from "react";

/**
 * Component for having recipes
 */
class RecipeView extends Component {
  title = this.props.name;
  instructions = " Milk + Masala + Sugar";

  constructor(props) {
    super(props);
    // this.title = props.name;
    // this.instructions = props.instruction;
  }
  render() {
    const { title, instruction } = this.props; // Object destructuring
    return (
      <div className="RecipeView">
        <hr />
        <h3>{title}</h3>
        <p>{instruction}</p>
      </div>
    );
  }
}

export default RecipeView;
