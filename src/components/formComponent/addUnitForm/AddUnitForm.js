import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const AddUnitForm = ({ isModalVisible, form }) => {

    console.log(isModalVisible);

    const { Option } = Select;
    // const [form] = Form.useForm();

    // const onSubmit = () => {
    //     console.log('clicked')
    // }


    const dataAdded = (values) => {
        console.log('Success:', values);
    };


    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={dataAdded}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="shortname"
                    label="Short Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your short name',
                        },
                    ]}
                >
                    <Input placeholder="Short Name" />
                </Form.Item>
                <Form.Item
                    name="allowDecimal"
                    label="Allow Decimal"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your short name',
                        },
                    ]}
                >
                    <Select placeholder="Please select">
                        <Option value="burger">Burger</Option>
                        <Option value="pizza">Pizza</Option>
                        <Option value="rice">Rice</Option>
                        <Option value="pasta">Pasta</Option>
                    </Select>
                </Form.Item>
                {isModalVisible ? null : <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>}
            </Form>
        </>
    );
};

export default AddUnitForm;