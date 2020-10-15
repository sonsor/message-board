import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import posts from '../modules/posts'
import {PostList} from "../components/PostList";
import {Loading} from "../components/Loading";
import {PostDetail} from "../components/PostDetail";
import {Notification} from "../components/Notification";
import {Helmet} from "react-helmet";


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
            <Helmet>
                <title>Posts</title>
            </Helmet>
            {loading && <Loading />}
            {error && <Notification content='There was an error fetching posts' />}
            {!loading && <PostList data={data} onSelect={onSelect} />}
            <PostDetail  id={selected} onClose={onClose} />
        </Fragment>
    )
}

export default Posts