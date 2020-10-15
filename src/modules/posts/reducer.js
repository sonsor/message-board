import {createReducer} from "@reduxjs/toolkit";
import states from "../../state";
import * as constants from './constants'
import keyBy from 'lodash/keyBy'
import { fromJS } from "immutable";


export default createReducer(states.get('posts'), {
    [constants.UPDATE_POSTS]: (state, {payload}) => {
        const posts = keyBy(payload, 'id')
        let byId = state.get('byId').toJS()
        byId = {
            ...byId,
            ...posts
        }
        state = state.set('byId', fromJS(byId))
        return state
    },
    [constants.UPDATE_POST_COMMENTS]: (state, { payload }) => {
        console.log("payloadpayloadpayload: ", payload)
        const { id, comments } = payload
        let post = state.get('byId').get('' + id)
        post = post.set('comments', fromJS(comments))
        let byId = state.get('byId')
        byId = byId.set('' + id, post)
        return state.set('byId', byId)
    },
    [constants.FETCH_POST_ERROR]: (state, { payload }) => state.set('error', payload),
    [constants.FETCH_POST_COMMENT_ERROR]: (state, { payload }) => state.set('commentError', payload)
})