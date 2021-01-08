import React from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  width: 100%;
  background-color: #20232a;
  padding: 16px;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Container>
      <h3>Header Microfrontend</h3>
      <Button
        variant="outlined"
        style={{ color: "white", borderColor: "white" }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Header;
