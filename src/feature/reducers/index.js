import { combineReducers } from '@reduxjs/toolkit';
import postsSlice from './posts/posts.slice';

export const rootReducer = combineReducers({
	posts: postsSlice,
});
