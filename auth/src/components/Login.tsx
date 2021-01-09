import React, { useCallback } from "react";
import { Button, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import Input from "./Input";
import { CardFooter, TabTitle } from "./styled";

const Login = () => {
  const onLogin = useCallback(() => {
    console.log("login");
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
