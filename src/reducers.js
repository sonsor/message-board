import { combineReducers } from "redux-immutable";
import posts from './modules/posts/reducer'
import users from './modules/users/reducer'


export default reducers => {
  return combineReducers({
      posts,
      users,
      ...reducers
  })
}