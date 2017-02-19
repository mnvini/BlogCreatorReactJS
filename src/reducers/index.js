import { combineReducers } from 'redux';
import PostsReducerts from './reducer_posts'
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  posts: PostsReducerts,
  form: formReducer
});

export default rootReducer;
