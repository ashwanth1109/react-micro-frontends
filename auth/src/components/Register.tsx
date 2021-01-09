import React, { useCallback } from "react";
import { Button, CardContent } from "@material-ui/core";
import Input from "./Input";
import { CardFooter, TabTitle } from "./styled";
import { Link } from "react-router-dom";

const Register = () => {
  const onRegister = useCallback(() => {
    console.log("register");
  }, []);

  return (
    <>
      <CardContent>
        <TabTitle>Register page (route)</TabTitle>
        <Input label="Username" />
        <Input label="Password" />
        <Input label="Confirm Password" />
      </CardContent>

      <CardFooter>
        <Link to="/auth/login" style={{ textDecoration: "initial" }}>
          <Button variant="outlined">Login</Button>
        </Link>
        <Button
          variant="contained"
          onClick={onRegister}
          style={{ background: "#1db954" }}
        >
          Register
        </Button>
      </CardFooter>
    </>
  );
};

export default Register;
