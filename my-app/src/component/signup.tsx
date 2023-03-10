import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import { getDatabase, ref, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth , db} from "../appconfigration/index" 
import { useDispatch } from 'react-redux';
import { addUser } from '../appredux/reducers';
const Signup: React.FC = () => {
  const navigate = useNavigate()
  const dispactch = useDispatch()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);   
    // const db = getDatabase();///
    const {email , username,password} = values  
   /// const auth = getAuth(); ///
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        push(ref(db, 'users/'), {
            email: email, 
            password:password,
            fullname:username,
          })
          .then(() =>{
             navigate('/')
             dispactch(addUser(user))
             console.log("saved user data successfully")}
             )
                    .catch((err) => console.log(err))
        })  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });  
  };  

  return (
<div>
  <h1>SAYLANI WELFARE</h1>
  <h3>ONLINE DISCOUNT SHOP</h3>
   <h3>sign up</h3>
<Form 
    
    name="normal_signup" 
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item   
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item   
        name="username" 
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          sign up
        </Button> <br /> <br />
    <Link to = "/login"><a href="">Sign in</a></Link>  
      </Form.Item>
    </Form>
</div>
    
  );
};

export default Signup;