import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import routes from '../../utils/routes/routes';

const { Content } = Layout;


function getRoutes(route) {
    console.log(route);
    return (<Route exact path={route.path} component={route.module} ></Route>)
}

function ContentCustom() {
    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '10px 10px',
                padding: 24,
                minHeight: 280,
            }}
        >
            {routes.map((route) => {

                if (route.childern.length === 0) {
                    return getRoutes(route)
                } else {
                    return route.childern.map((childRoute) => {
                        return getRoutes(childRoute)
                    })
                }
            })}
        </Content>
    )
}

export default ContentCustom;
