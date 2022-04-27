import React from 'react';
import { Button, Form, Input } from 'antd';

const AddCategoryForm = ({isCategoryModalVisible, form}) => {

    const categoryAdded = (values) => {
        console.log('Success:', values);
      };
    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={categoryAdded}
            >
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input category',
                        },
                    ]}
                >
                    <Input placeholder="Category" />
                </Form.Item>
                {isCategoryModalVisible ? null : <Form.Item
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

export default AddCategoryForm;