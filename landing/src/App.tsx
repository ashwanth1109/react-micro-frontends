import React, { useCallback, useEffect } from "react";
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

const App = () => {
  const navigateToAuth = useCallback(() => {
    //
  }, []);

  useEffect(() => {
    console.log("landing effect called");

    return () => {
      console.log("landing cleanup called");
    };
  }, []);

  return (
    <div>
      <Header>
        <Title>Landing Microfrontend (route)</Title>
        <Description>Page description goes here</Description>
        <Button style={{ background: "#1DB954" }}>Get Started</Button>
      </Header>
    </div>
  );
};

export default App;
