import { createAsyncThunk } from '@reduxjs/toolkit';
import PostService from '../../../service/mainService';

export const fetchPosts = createAsyncThunk(
	'@@posts/fetchposts',
	async (_, { rejectWithValue }) => {
		try {
			const res = await PostService.getAllPosts();
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
