import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { FcBusinessman } from 'react-icons/fc'
import { MailOutlined } from '@ant-design/icons';
import './DashboardLayout.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import Title from 'antd/lib/typography/Title';
import AddCategoryForm from '../formComponent/addCategoryForm/AddCategoryForm';
import EditableTable from '../tableComponent/editableTable/EditableTable';
import BasicTable from '../tableComponent/BasicTable';
import AddProductForm from '../formComponent/addProductForm/AddProductForm';
import AddUnitForm from '../formComponent/addUnitForm/AddUnitForm';
import AntSearchData from '../antSearchData/AntSearchData';
import LoginForm from '../loginForm/LoginForm';

const { Header, Content, Sider } = Layout;


const DashboardLayout = () => {
    const [menuName, setMenuName] = useState("");

    const slideChange = (componentName) => {
        switch (componentName) {
            case 'LoginForm':
                return <LoginForm />;
            case 'EditedTable':
                return <EditableTable />;
            case 'BasicTable':
                return <BasicTable />;
            case 'AddProductForm':
                return <AddProductForm />;
            case 'AddUnitForm':
                return <AddUnitForm />;
            case 'AddCategoryForm':
                return <AddCategoryForm />;
            case 'SearchBar':
                return <AntSearchData />;
            default:
                return <Title level={1}>Welcome To Food World BD</Title>;
        }

    }

    console.log(slideChange(menuName), menuName);

    return (
        <Layout>
            <Header style={{ padding: 10 }}>
                <div>
                    <Title style={{color: '#ccc'}} level={3} >Food World BD</Title>
                    <Avatar style={{ float: 'right', marginTop: '-40px' }} icon={<FcBusinessman />} />
                </div>
               
            </Header>
            <Layout>
                <Sider width={200} style={{ minHeight: 600 }} className="slider-background">
                    <Menu
                        defaultSelectedKeys={['Dashboard']}
                        mode="inline"
                        onClick={item => setMenuName(item.key)}
                    >
                        <Menu.Item key='Dashboard'>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key='LoginForm'>
                            Login Form
                        </Menu.Item>
                        <Menu.Item key='EditedTable'>
                            Edited Table
                        </Menu.Item>
                        <Menu.Item key='BasicTable'>
                            Basic Table
                        </Menu.Item>
                        <Menu.Item key='AddProductForm'>
                            Add Product Form
                        </Menu.Item>
                        <Menu.Item key='AddUnitForm'>
                            Add Unit Form
                        </Menu.Item>
                        <Menu.Item key='AddCategoryForm'>
                            Add Category Form
                        </Menu.Item>
                        <Menu.Item key='SearchBar'>
                            Search Bar
                        </Menu.Item>
                        <Menu.Item key='Product'>
                            Product
                        </Menu.Item>
                        <SubMenu
                            key="sub1" icon={<MailOutlined />} title="About Us"
                        >
                            <Menu.ItemGroup key='AboutUs' title='Country 1'>
                                <Menu.ItemGroup>
                                    <Menu.Item key='location1'>Location1</Menu.Item>
                                    <Menu.Item key='location2'>Location2</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >

                        {/* {isClick ?  <AddCategoryForm /> : null} */}
                        {slideChange(menuName)}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;