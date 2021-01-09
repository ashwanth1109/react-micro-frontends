import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Header from "./modules/Header";
import styled from "@emotion/styled";

const LandingLazy = lazy(() => import("./modules/Landing"));
const AuthLazy = lazy(() => import("./modules/Auth"));
const DashboardLazy = lazy(() => import("./modules/Dashboard"));

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #282c34;
`;

const App = () => {
  const { login, history, isSignedIn$, logout } = useAuth();

  return (
    <div>
      <HeaderContainer>
        <Header isSignedIn$={isSignedIn$} logout={logout} />
      </HeaderContainer>

      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy login={login} history={history} />
            </Route>
            <Route path="/dashboard">
              <DashboardLazy />
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
