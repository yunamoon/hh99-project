// rootReducer.js
import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';
import postReducer from './posts/postReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  users: usersReducer,
  // 다른 리듀서들을 여기에 추가
});

export default rootReducer;
