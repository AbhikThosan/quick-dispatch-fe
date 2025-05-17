import { Button, Form } from "antd";
import React from "react";
import { LOGIN_FORM_NAME } from "../constant/loginFormConstant";
import LoginFormInputs from "./LoginFormInputs";

const LoginForm = () => {
  return (
    <Form name={LOGIN_FORM_NAME} layout="vertical" requiredMark={false}>
      <LoginFormInputs />
      <Button>Log In</Button>
    </Form>
  );
};

export default LoginForm;
