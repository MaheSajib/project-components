import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useState } from 'react';

const AntSearchData = () => {
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductData(data))
    }, [])

    console.log(productData)
    return (
        <div>
            <Select
                showSearch
                style={{ width: 600 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
            >

                {
                    productData.map(itm => <Option value={itm.title}>{itm.title}</Option>)
                }
            </Select>
            
        </div>
    );
};

export default AntSearchData;