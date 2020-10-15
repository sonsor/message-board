import React from "react";
import { Alert } from 'antd'
import { string } from "prop-types";

export const Notification = ({ content }) => {
    return (
        <Alert message={content} type="error" />
    )
}

Notification.propTypes = {
    content: string
}