import { postCreateUser } from "../services/postCreateUser.js"
import { Form, Button, Input, InputNumber, Select } from "antd";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigate = useNavigate()
    const onFinish = async values => {
        const neUserInfo = await postCreateUser(
            values.email,values.password,values.cellphone,values.gender,values.first_name,values.last_name
        )
        if(neUserInfo){
            alert('User created!')
            navigate('/')
        } else {
            alert('error!')
        }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
  return (
    <>
        <h1>Registration form</h1>
        <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='mx-auto max-w-md py-10'
        >
            <Form.Item
            label="E-Mail"
            name="email"
            rules={[{ required: true, message: 'Enter your E-Mail' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Enter your Password' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            label="Cellphone"
            name="cellphone"
            rules={[{ required: true, message: 'Enter your cellphone' }]}
            >
            <InputNumber />
            </Form.Item>

            <Form.Item 
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Select your gender' }]}
            >
                <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true, message: 'Enter your first name' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Last Name"
            name="last_name"
            rules={[{ required: true, message: 'Enter your last name' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item label=''>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
            <Form.Item label=''>
            <button
            onClick={() => navigate("/")}>
                Go back
            </button>
            </Form.Item>
        </Form>
    </>
    
  )
}
