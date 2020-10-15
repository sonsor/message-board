import React from "react";
import {useSelector} from "react-redux";
import { Modal } from 'antd';
import posts from '../modules/posts'
import {PostComments} from "./PostComments";
import {func, number} from "prop-types";

export const PostDetail = ({ id, onClose }) => {

    const post = useSelector(posts.selectors.getPost(id))

    return (
        <Modal
            title={post.title}
            visible={id ? true: false}
            onOk={onClose}
            onCancel={onClose}
        >
            <p>{post.body}</p>
            <PostComments id={id} onRemove={onClose} />
        </Modal>
    )
}

PostDetail.propTypes = {
    id: number.isRequired,
    onClose: func
}