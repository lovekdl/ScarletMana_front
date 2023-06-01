import React from 'react';
import './login.css';
import { Link, useNavigate as useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push('/register');
  };

  const handleLoginFinish = (values) => {
    console.log('Login form values:', values);
    // 处理登录逻辑
    // 登录成功后进行页面跳转或其他操作
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className='login-form-inner'> 绯红魔法</h2>
        <Form onFinish={handleLoginFinish}>
          <Form.Item
            
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="登录用户名" />
          </Form.Item>

          <Form.Item
            
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item className='login-form-inner'>
            <Button type="primary" htmlType="submit" >
              登录
            </Button>
          </Form.Item>

          <div className='login-form-inner'>
            没有帐户，<Link to="/register">立即注册  </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
