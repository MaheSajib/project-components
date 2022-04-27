import React, { useState } from 'react';
import { Form, Input, Button, Select, Upload, Modal } from 'antd';
import { ImFolderUpload } from 'react-icons/im';
import { FaPlusCircle } from 'react-icons/fa';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './AddProductForm.css';
import AddUnitForm from '../addUnitForm/AddUnitForm';
import AddCategoryForm from '../addCategoryForm/AddCategoryForm';

const AddProductForm = () => {

    const [ckEditorData, setCkEditorData] = useState('');
    const [formData, setFormData] = useState({});
    const [categoryFormData, setCategoryFormData] = useState({});

    const [form] = Form.useForm();

    // For Unit Modal Button

    const [isModalVisible, setIsModalVisible] = useState(false);

    // For Category modal

    const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    // const handleOk = (data) => {
    //     setIsModalVisible(false);
    //     console.log('clicked', data);
    //     // dataAdded();
    // };

    const dataAdded = (values) => {
        setIsModalVisible(false);
        setFormData(values)
        console.log('Success:', values);
    };

    const categoryAdded = (values) => {
        setIsCategoryModalVisible(false);
        setCategoryFormData(values)
        console.log('Success:', values);
    };


    const submitAddUnitForm = (values) => {
        console.log(values);
    };

    const submitAddCategoryForm = (values) => {
        console.log(values);
    };


    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const { Option } = Select;

    const onFinish = (values) => {
        values.ckEditorData = ckEditorData;
        values.password = "lightbhaingagese";
        values.date = new Date();
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='add-product-form-container'>
            <h1>This is Add Product Form</h1>
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
                <Form.Item
                    style={{
                        marginBottom: 0,
                    }}
                    layout="inline"
                    className='name-input-group'
                >
                    <Form.Item style={{
                        display: 'inline-block',
                        width: 'calc(45%)',
                    }}
                        className='ant-form-item-margin-bottom-fix'
                        label="First Name"
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name',
                            },
                        ]}
                    >
                        <Input className='input-border-none' placeholder='Enter Your First Name' />
                    </Form.Item>
                    <Form.Item style={{
                        display: 'inline-block',
                        width: 'calc(50%)',
                    }}
                        className='ant-form-item-margin-bottom-fix'
                        label="Last Name"
                        name="last name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name',
                            },
                        ]}
                    >
                        <Input className='input-border-none' placeholder='Enter Your Last Name' />
                    </Form.Item>
                </Form.Item>

                <Form.Item style={{
                    // width: "90%"
                }}
                    className='ant-form-item-margin-bottom-fix'
                    label="Product Name"
                    name="product name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Product Name',
                        },
                    ]}
                >
                    <Input className='input-border-none' placeholder='Enter Product Name' />
                </Form.Item>
                <Form.Item className='ant-form-item-margin-bottom-fix'
                    layout='inline'
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input category',
                        },
                    ]}
                >
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: 'calc(45%)',
                        }}
                    >
                        <Select placeholder="Please select a category">
                            <Option value="burger">Burger</Option>
                            <Option value="pizza">Pizza</Option>
                            <Option value="rice">Rice</Option>
                            <Option value="pasta">Pasta</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: 'calc(45%)',
                        }}
                    >
                        <Button type="primary" onClick={() => setIsCategoryModalVisible(true)}>
                            <FaPlusCircle />
                        </Button>
                        <Modal title="Add Category" visible={isCategoryModalVisible} 
                           footer={[
                            <Button key="cancel" onClick={() => setIsCategoryModalVisible(false)}>
                                Cancel
                            </Button>,
                            <Button
                                key="submit"
                                type="primary"
                                // loading={postData.loading}
                                onClick={() => {
                                    form
                                        .validateFields()
                                        .then((values) => {
                                            submitAddCategoryForm(values);
                                        })
                                        .catch((info) => {
                                            console.log("Validate Failed:", info);
                                        });
                                }}
                            >
                                Submit
                            </Button>
                        ]}>
                            <AddCategoryForm form={form} isCategoryModalVisible={isCategoryModalVisible} categoryAdded={categoryAdded}/>
                        </Modal>
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    className='ant-form-item-margin-bottom-fix'
                    label="Product Image"
                    name="product image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                // extra="longggggggg"
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<ImFolderUpload />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item className='ant-form-item-margin-bottom-fix'
                    label="Unit"
                    name="unit"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Unit',
                        },
                    ]}
                >
                    <Form.Item
                        layout='inline'
                        className='unit-input-group'
                    >
                        <Form.Item
                            style={{
                                display: 'inline-block',
                                width: 'calc(45%)',
                            }}
                            className='ant-form-item-margin-bottom-fix'>
                            <Input className='input-border-none' placeholder='Please Enter Unit' />
                        </Form.Item>

                        <Form.Item
                            style={{
                                display: 'inline-block',
                                width: 'calc(45%)',
                            }}
                            className='ant-form-item-margin-bottom-fix'>
                            <>
                                <Button type="primary" onClick={showModal}>
                                    <FaPlusCircle />
                                </Button>
                                <Modal title="Add Unit" visible={isModalVisible} footer={[
                                    <Button key="cancel" onClick={() => setIsModalVisible(false)}>
                                        Cancel
                                    </Button>,
                                    <Button
                                        key="submit"
                                        type="primary"
                                        // loading={postData.loading}
                                        onClick={() => {
                                            form
                                                .validateFields()
                                                .then((values) => {
                                                    submitAddUnitForm(values);
                                                })
                                                .catch((info) => {
                                                    console.log("Validate Failed:", info);
                                                });
                                        }}
                                    >
                                        Submit
                                    </Button>
                                ]}>
                                    {/* For Component */}
                                    <AddUnitForm form={form} isModalVisible={isModalVisible}  />
                                </Modal>
                            </>
                        </Form.Item>
                    </Form.Item>
                </Form.Item>

                <Form.Item className='ant-form-item-margin-bottom-fix'
                    label="Product Description"
                >

                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setCkEditorData(data)
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </Form.Item>

                <Form.Item className='ant-form-item-margin-bottom-fix'>
                    <Button type="primary" className='add-product-form-btn' htmlType="submit">
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddProductForm;