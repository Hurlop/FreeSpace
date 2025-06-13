import React from 'react'
import { Form, Button, Input } from "antd";
import { postLoginService } from '../services/postLoginService';
import { useNavigate } from 'react-router-dom';


export function Login() {
    const navigateFeed = useNavigate()
    async function fetchToken(email, password){
        const response = await postLoginService(email,password)
        console.log('respuesta fetchToken: ',response)
    }
    const onFinish = async values => {
        console.log('Success:', values);
        await fetchToken(values.email, values.password)
        navigateFeed('/homeFeed')
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };
  return (
    <>
        <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Ingresa tu email!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: 'Ingresa tu contrasena!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
</>
  )
}
