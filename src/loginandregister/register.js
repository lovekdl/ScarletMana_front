import React from 'react';
import { Link, useNavigate as useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const RegisterForm = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/');
  };

  const handleRegisterFinish = (values) => {
    console.log('Register form values:', values);
    // 处理注册逻辑
    // 注册成功后进行页面跳转或其他操作
  };

  return (
    <Form onFinish={handleRegisterFinish}>
      <h2>Register</h2>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Passwords do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

      <div>
        Already have an account? <Link to="/">Login</Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
