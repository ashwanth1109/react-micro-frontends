import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Header from "./modules/Header";

const LandingLazy = lazy(() => import("./modules/Landing"));
const AuthLazy = lazy(() => import("./modules/Auth"));

const App = () => {
  const { login } = useAuth();

  return (
    <div>
      <Header />

      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy login={login} />
            </Route>
            <Route path="/">
              <LandingLazy />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
