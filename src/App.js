import "./App.css";
import React, { Component } from "react";
import RecipeList from "./Components/RecipeList";
import RegisterForm from "./Components/RegisterForm";

/**
 * The main component for the app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Recipe Mixer</h1>
        <p>The place to get rich by sharing yoru culinary skills</p>

        <RecipeList />
        <hr />
        <RegisterForm />
      </div>
    );
  }
}

export default App;
