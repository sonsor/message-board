import React, { Fragment } from "react";
import {Card, Col, Divider, Row, Button} from "antd";

export const PostList = ({data, onSelect}) => {
    return (
        <Fragment>
            <Divider orientation="left" />
            {data.map((posts, i) => (
                <Fragment key={`posts${i}`}>
                    <Row gutter={16} type="flex">
                        {posts.map(post => (
                            <Col span={6} key={`post${post.id}`}>
                                <Card title={post.title} extra={<Button onClick={onSelect(post)}>Details</Button>} style={{ width: 300 }}>
                                    <p>{post.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Divider orientation="left" />
                </Fragment>
            ))}
        </Fragment>
    )
}