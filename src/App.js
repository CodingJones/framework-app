import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="continaer">
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <LandingPage />
        </div>
      </div>
    </div>
  );
}

export default App;
