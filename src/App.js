import React, { Component, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/style.scss";
import LoginPage from "./views/pages/LoginPage";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/login"
              name="LoginPage"
              render={() => <LoginPage />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
