import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  width: 100%;
  background-color: #20232a;
  padding: 16px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ navigate }: HeaderMountOptions) => {
  const navigateToLanding = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Container>
      <h3 onClick={navigateToLanding} style={{ cursor: "pointer" }}>
        Header Microfrontend
      </h3>
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
