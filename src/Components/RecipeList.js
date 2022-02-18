import React, { Component } from "react";
import RecipeView from "./RecipeView";
import Recipe from "../Modal/Recipe";
/**
 * A componet that will render a list of recipes
 */
class RecipeList extends Component {
  // The fake database
  recipesList = [
    new Recipe("Harshit's Tea ☕️", "Milk + Tea + Sugar"),
    new Recipe("Dessert 🍰", "Sugar and Cream"),
    new Recipe("Pizza 🍕", "Crust + Cheese"),
  ];
  renderRecipes() {
    return (
      <div>
        {this.recipesList.map((elem, index) => {
          return (
            <RecipeView
              key={`Recipe_${index}`}
              instruction={elem._instruction}
              title={elem._title}
            />
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="RecipeList">
        <h2>Recipes</h2>
        {this.renderRecipes()}
      </div>
    );
  }
}

export default RecipeList;
