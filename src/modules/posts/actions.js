import { createAction } from "@reduxjs/toolkit";
import * as constants from './constants'
import users from '../users'
import services from '../../services'

const updatePosts = createAction(constants.UPDATE_POSTS)
const updatePostComments = createAction(constants.UPDATE_POST_COMMENTS)

export const getPosts = () => async dispatch => {
    const posts = await services.get('posts').all()
    const usersList = await Promise.all(posts.map(post => services.get('users').one(post.userId)))
    dispatch(updatePosts(posts))
    dispatch(users.actions.updateUsers(usersList))
}

export const getPostComments = id => async dispatch => {
    const comments = await services.get('posts').comments(id)
    dispatch(updatePostComments({ id, comments }))
}