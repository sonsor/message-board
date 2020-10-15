import React, {Fragment, useEffect, useState} from "react";
import { Button, Card } from "antd";
import {useDispatch, useSelector} from "react-redux";
import posts from '../modules/posts'
import {Loading} from "./Loading";
import {Notification} from "./Notification";
import { number, func } from "prop-types";

export const PostComments = ({ id, onRemove }) => {

    const comments = useSelector(posts.selectors.getPostComments(id))
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const error = useSelector(posts.selectors.getPostCommentsError())
    const dispatch = useDispatch()

    useEffect(() => {
        setShow(false)
    }, [id])

    const getPostComments = () => {
        setLoading(true)
        dispatch(posts.actions.getPostComments(id)).then(() => {
            setLoading(false)
        })
    }


    const toggle = () => {
        if (!show) {
            getPostComments()
        } else {
            setLoading(false)
        }
        setShow(!show)
    }

    const remove = () => {
        setLoading(true)
        dispatch(posts.actions.removePost(id)).then(() => {
            setLoading(false)
            onRemove()
        })
    }



    return (
        <Fragment>
            <Button onClick={toggle} disabled={loading}>{show ? 'Hide': 'Show'} Comments</Button>
            <Button onClick={remove} disabled={loading}>Delete</Button>
            {loading && <Loading/>}
            {error && <Notification content="There was an error fetching post comment" />}
            {show && !loading &&
            <Card title="Comments">
                {comments.map(comment => (
                    <Card
                        key={`comment${comment.id}`}
                        style={{ marginTop: 16 }}
                        type="inner"
                        title={comment.name}
                    >
                        {comment.body}
                    </Card>
                ))}
            </Card>
            }
        </Fragment>
    )
}

PostComments.propTypes = {
    id: number.isRequired,
    onRemove: func
}