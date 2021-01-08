import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const LandingLazy = lazy(() => import("./modules/Landing"));
const AuthLazy = lazy(() => import("./modules/Auth"));

const App = () => {
  return (
    <div>
      <h1>Container App</h1>
      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy route$={route$} />
            </Route>
            <Route path="/">
              <LandingLazy route$={route$} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
