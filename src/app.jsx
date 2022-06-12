import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home-page-component";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    );
  }
}
