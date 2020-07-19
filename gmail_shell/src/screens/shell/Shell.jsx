import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router} from "react-router-dom";
import HeaderCustom from '../../components/shell/HeaderCustom';
import NavigationCustom from '../../components/shell/NavigationCustom';
import ContentCustom from '../../components/shell/ContentCustom';
import FooterCustom from '../../components/shell/FooterCustom';


function Shell() {
    const [collapsed, setCollapsed] = useState(true);

    const updateCollapsedState = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Router>
        <Layout className="layout-height site-layout">
            <HeaderCustom collapsed={collapsed} updateCollapsedState={updateCollapsedState} />
            <Layout className="site-layout">
                <NavigationCustom collapsed={collapsed} />
                <ContentCustom />                
            </Layout>
            <FooterCustom />
        </Layout>
        </Router>)
}

export default Shell;