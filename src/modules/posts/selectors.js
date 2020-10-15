import {createSelector} from "reselect";
import chunk from 'lodash/chunk'

const PostsSelector = () => state => state.get('posts')
const UsersSelector = () => state => state.get('users')

export const getPosts = () =>
    createSelector(
        [PostsSelector(), UsersSelector()],
        (posts, users) => {
            const postsList = Object.values(posts.get('byId').toJS())
            const usersList = users.get('byId')

            if (usersList.toArray().length <= 0) {
                return []
            }

            return chunk(postsList.map(post => ({
                id: post.id,
                title: usersList.get('' + post.userId).get('name'),
                description: post.body
            })), 4)
        }
    )

export const getPost = id =>
    createSelector(
        PostsSelector(),
        state => {
            const posts  = state.get('byId')
            if (!posts.has('' + id)) {
                return {}
            }
            return posts.get('' + id, {}).toJS()
        }
    )

export const getPostComments = id =>
    createSelector(
        getPost(id),
        state => state?.comments ?? []
    )

export const getPostsError = () =>
    createSelector(
        PostsSelector(),
        state => Boolean(state.get('error'))
    )

export const getPostCommentsError = () =>
    createSelector(
        PostsSelector(),
        state => Boolean(state.get('commentError'))
    )