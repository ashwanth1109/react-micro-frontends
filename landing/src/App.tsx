import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";

const Header = styled.div`
  background-color: #282c34;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 70px;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  color: #1db954;
`;

const Description = styled.h2`
  margin-bottom: 16px;
  color: white;
`;

const App = ({ navigate }: { navigate: NavigateFunction }) => {
  const navigateToAuth = useCallback(() => {
    navigate("/auth/login");
  }, [navigate]);

  return (
    <div>
      <Header>
        <Title>Landing Microfrontend (route)</Title>
        <Description>Some random text goes here</Description>
        <Button style={{ background: "#1DB954" }} onClick={navigateToAuth}>
          Get Started
        </Button>
      </Header>
    </div>
  );
};

export default App;
