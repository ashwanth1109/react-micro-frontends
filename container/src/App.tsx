import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LandingLazy = lazy(() => import("./modules/Landing"));
const AuthLazy = lazy(() => import("./modules/Auth"));

const App = () => {
  return (
    <Router>
      <div>
        <h1>Container App</h1>
        <div>
          <Suspense fallback={<div>Loading . . .</div>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy />
              </Route>
              <Route path="/">
                <LandingLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
