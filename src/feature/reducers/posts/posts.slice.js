import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './posts.actions';

const initialState = {
	posts: [],
	isLoading: false,
	isError: null,
};

const postsSlice = createSlice({
	name: '@@posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.isLoading = true;
				state.isError = null;
			})
			.addCase(fetchPosts.fulfilled, (state, actions) => {
				state.isLoading = false;
				state.isError = null;
				state.posts = actions.payload;
			})
			.addCase(fetchPosts.rejected, (state, actions) => {
				state.isLoading = false;
				state.isError = actions.payload;
			});
	},
});

export default postsSlice.reducer;
