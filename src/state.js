import {fromJS} from "immutable";

export default fromJS({
    posts: {
        byId: {},
        error: false,
        commentError: false
    },
    users: {
        byId: {},
        error: ''
    },
})