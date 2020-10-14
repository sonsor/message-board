import React from "react";
import { Spin } from "antd";

export const Loading = () => {
    return (
        <div style={{padding: 10, textAlign: 'center'}}>
            <Spin size="large" />
        </div>
    )
}