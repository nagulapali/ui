import React from 'react';
import { Layout, Menu } from 'antd';
import routes from '../../utils/routes/routes'
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

function getRoutes(route) {
    return (<Menu.Item key={route.path} icon={route.icon} style={{ marginTop: 0 }} >
        <span>{route.name}</span>
        <Link to={route.path} />
    </Menu.Item>)
}


function NavigationCustom(props) {
    const location = useLocation();
    
    return (
        <Sider trigger={null} width={200} collapsible collapsed={props.collapsed} style={{ background: "#fff" }}>           
            <Menu mode="inline" selectedKeys={[location.pathname]} defaultOpenKeys={[location.pathname.split("/")[1 ]]}>
                {routes.map((route) => {
                    if (route.childern.length === 0) {
                        return getRoutes(route);
                    }
                    else {
                        return (<SubMenu key={route.path} icon={route.icon} title={route.name}>
                            {route.childern.map((route1) => {
                                return getRoutes(route1)
                            })}
                        </SubMenu>)
                    }
                })}
            </Menu>

        </Sider>
    )
}

export default NavigationCustom;