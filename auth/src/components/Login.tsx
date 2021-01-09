import React, { useCallback } from "react";
import { Button, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import Input from "./Input";
import { CardFooter, TabTitle } from "./styled";

const Login = ({ login }: { login: VoidFunction }) => {
  const onLogin = useCallback(() => {
    // verify details are correct (not implemented) and login
    login();
  }, []);

  return (
    <>
      <CardContent>
        <TabTitle>Login page (route)</TabTitle>
        <Input label="Username" />
        <Input label="Password" />
      </CardContent>

      <CardFooter>
        <Link to="/auth/register" style={{ textDecoration: "initial" }}>
          <Button variant="outlined">Register</Button>
        </Link>
        <Button
          variant="contained"
          onClick={onLogin}
          style={{ background: "#1db954" }}
        >
          Login
        </Button>
      </CardFooter>
    </>
  );
};

export default Login;
