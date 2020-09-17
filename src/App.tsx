import React from "react";
import Profile from "./components/pages/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
