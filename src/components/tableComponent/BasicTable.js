import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { BiDollar } from 'react-icons/bi';
import { Select } from 'antd';
import Title from 'antd/lib/typography/Title';


function handleChange(value) {
  console.log(`selected ${value}`);
}


const BasicTable = () => {

  const { Option } = Select;
  const [tData, setTdata] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setTdata(data))
  }, [])

  console.log(tData)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: imgLink => <img src={imgLink} style={{width: '50px', height: '50px'}} alt="" srcset="" />
    },
    {
      title: 'Action',
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
      title: 'Unit Purchase Price',
      dataIndex: 'price',
      render: text => <p><BiDollar />{parseInt(text)}</p>
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: categoryTxt => (
        <input defaultValue={categoryTxt} type="text" />
      )
    },
    {
      title: 'SKU',
      dataIndex: ''
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Title style={{textAlign: 'center', color: 'purple'}} level={2}>Basic Table Component</Title>
      <Table columns={columns} dataSource={tData} onChange={onChange} />
    </div>
  );
};

export default BasicTable;