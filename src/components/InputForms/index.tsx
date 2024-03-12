import { Button, Form, FormProps, Input } from "antd";
import React from "react";
import styles from "./index.module.scss";

interface InputFormsProps {
  type: FormType;
}

export enum FormType {
  Login,
  SignUp,
}

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const InputForms = ({ type }: InputFormsProps) => {
  const isSignUpPage = type === FormType.SignUp;

  return (
    <Form
      name="basic"
      layout="vertical"
      className={styles.form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label={<label className={styles.label}>Email</label>}
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input className={styles.input} placeholder="Enter Email" />
      </Form.Item>

      <Form.Item<FieldType>
        label={<label className={styles.label}>Password</label>}
        name="password"
        style={isSignUpPage ? {} : { marginBottom: 50 }}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className={styles.input} placeholder="Enter Password" />
      </Form.Item>
      {isSignUpPage && (
        <p className={styles.passwordRuleText}>
          Password should be 8-12 characters and at least include one special character
        </p>
      )}
      <a className={styles.redirectText} href={type === FormType.SignUp ? "/login" : "/signup"}>
        {isSignUpPage ? "Go Login>>" : "Go Sign Up>>"}
      </a>
      <Form.Item className={styles.buttonContainer}>
        <Button className={styles.button} type="primary" shape="round" htmlType="submit">
          {isSignUpPage ? "Login" : "Sign Up"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForms;
