import { useEffect } from "react";
import { Form, Button, Input } from "antd";
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext.jsx';

export function Login() {
    const loginContext = useLoginContext()
    const navigate = useNavigate()
    const onFinish = async values => {
        const isLoggedIn = await loginContext.logIn(values.email, values.password)
        if(isLoggedIn){
            alert('Sesion Iniciada')
            navigate('/homeFeed')
        } else {
            alert('Error')
        }
    };
    useEffect(() =>{
        const tokenExists = localStorage.getItem('token')
        if(tokenExists){
            navigate('/homeFeed')
        } else {
            navigate('/')
        }
    },[])
  return (
    <>
        <Form
            name="login"
            onFinish={onFinish}
            autoComplete="off"
            className='mx-auto max-w-md py-10'
        >
            <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Enter your email' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: 'Enter your password' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item label=''>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            <Form.Item label=''>
                <button onClick={() => navigate("/register")}>Register</button>
            </Form.Item>
        </Form>
    </>
  )
}
