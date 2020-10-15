import React from "react";
import { Layout } from 'antd';
const { Header, Content } = Layout

export const Main = ({ children }) => {
    return (
        <Layout>
            <Header>Posts</Header>
            <Content style={{ padding: '0 50px' }}>
                {children}
            </Content>
        </Layout>
    )
}