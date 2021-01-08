import React, { useCallback, useState } from "react";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  max-width: 600px;
  margin: 80px auto 0 auto;
`;

const CardTitle = styled.h1`
  text-align: center;
  margin: 24px 0;
`;

const TabTitle = styled.h2`
  margin-bottom: 24px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;

  > Button {
    margin-left: 16px;
  }
`;

const StyledTextField = ({ label }: { label: string }) => {
  const [val, setVal] = useState("");

  return (
    <TextField
      label={label}
      variant="outlined"
      style={{ width: "100%", marginBottom: "16px" }}
      onChange={(e) => setVal(e.target.value)}
      value={val}
    />
  );
};

const App = () => {
  const onLogin = useCallback(() => {
    //
  }, []);

  return (
    <CardContainer>
      <Card variant="outlined">
        <CardTitle>Auth microfrontend (2 routes)</CardTitle>

        <CardContent>
          <TabTitle>Login page (route)</TabTitle>
          <StyledTextField label="Username" />
          <StyledTextField label="Password" />
        </CardContent>

        <CardFooter>
          <Button variant="outlined">Register</Button>
          <Button
            variant="contained"
            onClick={onLogin}
            style={{ background: "#1db954" }}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </CardContainer>
  );
};

export default App;
