import {createReducer} from "@reduxjs/toolkit";
import states from "../../state";
import * as constants from './constants'
import keyBy from 'lodash/keyBy'
import { fromJS } from "immutable";

export default createReducer(states.get('users'), {
    [constants.UPDATE_USERS]: (state, {payload}) => {
        const users = keyBy(payload, 'id')
        let byId = state.get('byId').toJS()
        byId = {
            ...byId,
            ...users
        }
        state = state.set('byId', fromJS(byId))
        return state
    }
})