import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Header from "./modules/Header";
import styled from "@emotion/styled";

const LandingLazy = lazy(() => import("./modules/Landing"));
const AuthLazy = lazy(() => import("./modules/Auth"));

const HeaderContainer = styled.div`
  height: 60px;
  margin-bottom: 16px;
`;

const App = () => {
  const { login } = useAuth();

  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

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
