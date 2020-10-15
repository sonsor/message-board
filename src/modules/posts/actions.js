import { createAction } from "@reduxjs/toolkit";
import * as constants from './constants'
import users from '../users'
import services from '../../services'

const updatePosts = createAction(constants.UPDATE_POSTS)
const updatePostComments = createAction(constants.UPDATE_POST_COMMENTS)
const setFetchPostError = createAction(constants.FETCH_POST_ERROR)
const setFetchPostCommentsError = createAction(constants.FETCH_POST_COMMENT_ERROR)

export const getPosts = () => async dispatch => {
    dispatch(setFetchPostError(false))
    try {
        const posts = await services.get('posts').all()
        const usersList = await Promise.all(posts.map(post => services.get('users').one(post.userId)))
        dispatch(updatePosts(posts))
        dispatch(users.actions.updateUsers(usersList))
    } catch (e) {
        dispatch(updatePosts([]))
        dispatch(setFetchPostError(true))
    }
}

export const getPostComments = id => async dispatch => {
    dispatch(setFetchPostCommentsError(false))
    try {
        const comments = await services.get('posts').comments(id)
        dispatch(updatePostComments({ id, comments }))
    } catch (e) {
        dispatch(updatePostComments({ id, comments: [] }))
        dispatch(setFetchPostCommentsError(true))
    }
}

export const removePost = id => async dispatch => {
    try {
        await services.get('posts').remove(id)
        dispatch(getPosts())
    } catch (e) {
        // nothing to do
    }
}