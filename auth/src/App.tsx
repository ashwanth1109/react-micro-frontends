import React from "react";
import { Card } from "@material-ui/core";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

const CardContainer = styled.div`
  max-width: 600px;
  margin: 80px auto 0 auto;
`;

const CardTitle = styled.h1`
  text-align: center;
  margin: 24px 0;
`;

interface AppProps {
  login: VoidFunction;
}

const App = ({ login }: AppProps) => {
  return (
    <CardContainer>
      <Card variant="outlined">
        <CardTitle>Auth microfrontend (2 routes)</CardTitle>
        <Switch>
          <Route path="/auth/login">
            <Login login={login} />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
        </Switch>
      </Card>
    </CardContainer>
  );
};

export default App;
