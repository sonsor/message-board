import React, { Fragment, useState } from "react";
import { Button, Card } from "antd";
import {useDispatch, useSelector} from "react-redux";
import posts from '../modules/posts'
import {Loading} from "./Loading";
import {Notification} from "./Notification";
import { number } from "prop-types";

export const PostComments = ({ id }) => {

    const comments = useSelector(posts.selectors.getPostComments(id))
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const error = useSelector(posts.selectors.getPostCommentsError())
    const dispatch = useDispatch()

    const toggle = () => {
        if (!show) {
            setLoading(true)
            dispatch(posts.actions.getPostComments(id)).then(() => {
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
        setShow(!show)
    }



    return (
        <Fragment>
            <Button onClick={toggle}>{show ? 'Hide': 'Show'} Comments</Button>
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
    id: number.isRequired
}