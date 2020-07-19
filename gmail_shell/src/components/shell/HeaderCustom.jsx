import React, { useState } from 'react';
import { Menu, Dropdown, Avatar, Row, Col, Input } from 'antd';
import { Layout } from 'antd';
import { UserOutlined, MenuOutlined, SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import logo from '../../utils/images/logo.png';
import icons from '../../utils/images/icons.png';

const { Header } = Layout;
const { Search } = Input;
const images = (
    <Menu>
        <Menu.Item>
            Gmail
        </Menu.Item>
    </Menu>
)
const help = (
    <Menu>
        <Menu.Item>
            support
        </Menu.Item>
    </Menu>
)
const setting = (
    <Menu>
        <Menu.Item>
            settings
        </Menu.Item>
    </Menu>
)
const icon = (
    <Menu>
        <Menu.Item>
            google icons
        </Menu.Item>
    </Menu>
)
const menu = (
    <Menu>
        <Menu.Item>
            <h3>Google Account</h3>
        </Menu.Item>
        <Menu.Item>
            somemail@gmail.com
        </Menu.Item>

        <Menu.Item>
            Sign Out
        </Menu.Item>
    </Menu>
);

function HeaderCustom(props) {
    const [collapsed] = useState(true);
    return (<Header className="header-footer-background" style={{ padding: 0 }}>
        <Row>
            <Col span={3}>
                <Row>
                    <Col>
                        {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                            className: 'trigger',
                            style: { fontSize: '23px', margin: "5px", color: "black", padding: "20px" },
                            onClick: props.updateCollapsedState,
                        })}
                    </Col>
                    <Col span={3} offset={1}>
                        <Dropdown overlay={images} placement="bottomLeft">
                            <img src={logo} className="logo" alt="logo"></img>
                        </Dropdown>
                    </Col>

                </Row>
            </Col>
            < Col span={15} offset={2}>
                <Search
                    placeholder="Search mail"
                    onSearch={value => console.log(value)}
                    style={{ width: 500 }}
                />

            </Col>
            <Col span={1} >
                <Dropdown overlay={help} placement="bottomLeft">
                    <QuestionCircleOutlined style={{ cursor: "pointer", fontSize: "25px" }} />
                </Dropdown>
            </Col>

            <Col span={1} >
                <Dropdown overlay={setting} placement="bottomLeft">
                    <SettingOutlined style={{ cursor: "pointer", fontSize: "25px" }} />
                </Dropdown>

            </Col>
            <Col span={1}>
                <Dropdown overlay={icon} placement="bottomLeft">
                    <img src={icons} alt="logo" style={{ cursor: "pointer", width: "20px" }} />
                </Dropdown>
            </Col>
            <Col span={1} offset={0} >
                <Row>
                    <Col>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Avatar size="large" icon={<UserOutlined />} style={{ cursor: "pointer" }} />
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Header>)
}

export default HeaderCustom;
// import React,{useState} from 'react';
// import { Menu, Dropdown, Avatar, Row, Col, Button, Tooltip,Form } from 'antd';
// import { Layout } from 'antd';
// import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined,AppstoreAddOutlined  } from '@ant-design/icons';
// import { ReactComponent as ReactLogo } from '../../utils/images/logo.png';
// import Search from 'antd/lib/input/Search';
// //import AppleHeader from '../Components/shell';
// const { Header } = Layout;

// const menu = (
//     <Menu>
//         <Menu.Item>
//             Preferencs
//         </Menu.Item>
//         <Menu.Item>
//             Help
//         </Menu.Item>
//         <Menu.Item>
//             About
//         </Menu.Item>
//         <Menu.Item>
//             Sign Out
//         </Menu.Item>
//     </Menu>
// );



// function HeaderCustom(props) {
//     const [collapsed] = useState(true);
//     return (<Header className="header-footer-background" style={{ padding: 0 }}>

    
    
//         <Row>
//             <Col span={3} >
//                 <Row>
//                     <Col>
//                         {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                             className: 'trigger',
//                             style: { fontSize: '28px', margin: "5px", color: "#fff" },
//                             onClick: props.updateCollapsedState,
//                         })}
//                     </Col>
//                     <Col span={3} offset={1}>
//                         <ReactLogo width="150" height="40" className="logo" style={{ paddingTop: "15px" }} />
//                     </Col>
//                 </Row>
//             </Col>

//             <Col span={15} offset={2} >
//                 <Row>
//                     <Col>
//                     <Form className="back">
//                 <input type="text" name="search" className="extand "></input>
//                <Button type="primary" className="fa fa-search searchicon" shape="circle" icon={<SearchOutlined />} />
     

              
//                </Form>
//                 </Col>
//                         </Row>
//                         </Col>

//                     <Col span={1}>
//                         <Row>
//                             <Col>
//                         <Dropdown overlay={menu} placement="bottomLeft">
//                             <Avatar size="medium" icon={<AppstoreAddOutlined />} style={{ cursor: "pointer" }} />
                           
//                         </Dropdown>
//                     </Col>

//                 </Row>

//             </Col>

// </Row>
       
//     </Header>
//     );
//   }
//   export default HeaderCustom;