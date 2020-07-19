import React from 'react';
import {Divider, Layout, Row, Col } from 'antd';

const { Footer } = Layout;

function FooterCustom() {
    return (
        <Footer className="header-footer-background">
            <Row>
                <Col offset={8}>
                    <a href="__test">Terms</a>                
                <Divider type="vertical" />
                    <a href="__test">Privarcy</a>               
                <Divider type="vertical" />
                    <a href="__test">Programme policies</a>                

                </Col>
                <Col offset={21}>

                    <a href="__test">Last activity:5hours ago</a>                

                </Col>
            </Row>
        </Footer>
    )
}

export default FooterCustom;
