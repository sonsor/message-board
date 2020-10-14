import React from "react";
import {useSelector} from "react-redux";
import { Modal } from 'antd';
import posts from '../modules/posts'
import {PostComments} from "./PostComments";

export const PostDetail = ({ id, onClose }) => {

    const post = useSelector(posts.selectors.getPost(id))

    return (
        <Modal
            title={post.title}
            visible={true}
            onOk={onClose}
            onCancel={onClose}
        >
            <p>{post.body}</p>
            <PostComments id={id} />
        </Modal>
    )
}