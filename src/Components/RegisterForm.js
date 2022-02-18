import React, { Component } from "react";

/**
 * A componet that will register users
 */
class RegisterForm extends Component {
  registerButton() {
    alert("Registered");
  }
  render() {
    return (
      <div className="RegisterForm">
        <button onClick={() => this.registerButton()}>Register here</button>
      </div>
    );
  }
}

export default RegisterForm;
