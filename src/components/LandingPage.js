import React, { Component } from "react";
import "../App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const SignUp = () => <h1>SignUp</h1>;
const SignIn = () => <h1>SignIn</h1>;

const buttonStyle = {
  margin: 20,
  fontFamily: "Arial",
};

const headerStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export class LandingPage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 style={headerStyle}>Reflect on your day.</h1>

          <RaisedButton
            label="Sign Up"
            style={buttonStyle}
            onClick={this.continue}
          />
          <p>dasjfklsjd</p>
          <Router>
            <div>
              <Link to="/signIn">Sign In</Link>{" "}
              <Link to="/FormUserDetails" component={SignUp} />
              <Link to="/signIn" component={SignIn} />
            </div>
          </Router>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
