import React, { Component } from "react";
import FormUserDetails from "./SignUp";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email } = this.state;
    const values = { firstName, lastName, email };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <Success />;
      case 3:
        return;
    }
    return <div></div>;
  }
}

export default UserForm;
