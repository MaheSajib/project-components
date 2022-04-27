/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import './LoginForm.css';
import edu from './ed.png'
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { Form, Input, Button, Checkbox, Typography } from 'antd';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="form-container">
            <Row className='login-row'>
                <Col className='login-image' md={12} xs={24}>
                    <img className='login-banner' src={edu} alt="" />
                </Col>
                <Col className='login-input' md={12} xs={24}>
                    <div className="title-section">
                        <Title className='ant-title-margin-bottom-fix' level={2}>Sign Up</Title>
                        <a href=""><FcGoogle /></a>
                        <a href=""><BsTwitter /></a>
                        <a href=""><BsFacebook /></a>
                    </div>
                    <div>
                        <p className='sign-in-or'>Or Sign in with Email</p>
                    </div>
                    <div>
                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item className='ant-form-item-margin-bottom-fix'
                                label="Full Name"
                                name="full name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name',
                                    },
                                ]}
                            >
                                <Input className='input-border-none' placeholder='Enter Full Name' />
                            </Form.Item>
                            <Form.Item className='ant-form-item-margin-bottom-fix'
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input className='input-border-none' placeholder='Enter Email' />
                            </Form.Item>

                            <Form.Item className='ant-form-item-margin-bottom-fix'
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password className='input-border-none' placeholder='Enter Password' />
                            </Form.Item>
                            <Form.Item className='ant-form-item-margin-bottom-fix'
                                label="Confirm Password"
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Confirm password!',
                                    },
                                ]}
                            >
                                <Input.Password className='input-border-none' placeholder='Confirm Password' />
                            </Form.Item>

                            <Form.Item className='ant-form-item-margin-bottom-fix'
                                name="remember" >
                                <Checkbox>Keep me logged in</Checkbox>
                                <Typography.Link className='login-forgot-pass' href="#API">Forgot Password?</Typography.Link>
                            </Form.Item>

                            <Form.Item className='ant-form-item-margin-bottom-fix'>
                                <Button type="primary" className='login-sign-in-btn' htmlType="submit">
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className='login-dont-have-account'>
                        <p>Already have an account? <a>Sign in</a></p>
                        <p>Don't have an account? <a>Sign up</a></p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginForm;