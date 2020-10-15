import React from "react";
import {useSelector} from "react-redux";
import { Modal } from 'antd';
import posts from '../modules/posts'
import {PostComments} from "./PostComments";
import {bool, func, number, oneOf, oneOfType} from "prop-types";

export const PostDetail = ({ id, onClose, onRemove }) => {

    const post = useSelector(posts.selectors.getPost(id))

    return (
        <Modal
            title={post.title}
            visible={id ? true: false}
            onOk={onClose}
            onCancel={onClose}
        >
            <p>{post.body}</p>
            <PostComments id={id} onRemove={onRemove} />
        </Modal>
    )
}

PostDetail.propTypes = {
    id: oneOfType([number, bool]).isRequired,
    onClose: func,
    onRemove: func
}