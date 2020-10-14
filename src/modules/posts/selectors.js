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
        state => state.get('byId').get('' + id, {}).toJS()
    )

export const getPostComments = id =>
    createSelector(
        PostsSelector(),
        state => {
            const post = state.get('byId').get('' + id)
            return post.has('comments') ? post.get('comments').toJS(): []
        }
    )