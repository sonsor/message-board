import React, {Fragment, useEffect, useState} from "react";
import { Layout } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import posts from '../modules/posts'
import {PostList} from "../components/PostList";
import {Loading} from "../components/Loading";
import {PostDetail} from "../components/PostDetail";
import {Notification} from "../components/Notification";

const { Header, Content } = Layout

const Posts = () => {

    const [loading, setLoading] = useState(false)
    const data = useSelector(posts.selectors.getPosts())
    const [selected, setSelected] = useState(false)
    const error = useSelector(posts.selectors.getPostsError())
    const dispatch = useDispatch(posts.selector)

    useEffect(() => {
        setLoading(true)
        dispatch(posts.actions.getPosts()).then(() => {
            setLoading(false)
        })
    }, [dispatch])

    const onSelect = post => () => {
        setSelected(post.id)
    }

    const onClose = () => {
        setSelected(false)
    }


    return (
        <Fragment>
            <Header>Posts</Header>
            <Content style={{ padding: '0 50px' }}>
                {loading && <Loading />}
                {error && <Notification content='There was an error fetching posts' />}
                {!loading && <PostList data={data} onSelect={onSelect} />}
            </Content>
            {selected && <PostDetail  id={selected} onClose={onClose} />}
        </Fragment>
    )
}

export default Posts