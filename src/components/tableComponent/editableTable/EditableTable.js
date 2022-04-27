import React, { useEffect, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select } from 'antd';
import Title from 'antd/lib/typography/Title';
import { FiEdit } from 'react-icons/fi'
import { Option } from 'antd/lib/mentions';
import './EditableTable.css';


function handleChange(value) {
    console.log(`selected ${value}`);
  }

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const EditableTable = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(data)

    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            editable: true
        },
        {
            title: 'Name',
            dataIndex: 'title',
            width: '30%',
            editable: true,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            editable: true,
            render: imgLink => <img src={imgLink} style={{width: '50px', height: '50px'}} alt="" srcset="" />
        },
        {
            title: 'Category',
            dataIndex: 'category',
            editable: true,
        },
        {
            title: 'Action',
            width: '50px',
            dataIndex: 'action',
            render: () => (<>
              <Select defaultValue="Actions" style={{ width: 120 }} onChange={handleChange}>
                <Option value="Processing">Processing</Option>
                <Option value="Cooking">Cooking</Option>
                <Option value="Done">Done</Option>
            </Select>
            </>)
        },
        {
            title: 'operation',
            width: '20px',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link className='table-edit-button' disabled={editingKey !== ''} onClick={() => edit(record)}>
                        <FiEdit />
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <div>
            <Title style={{textAlign: 'center', color: 'purple'}} level={2}>Editable Table Component</Title>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>
    );
};

export default EditableTable;