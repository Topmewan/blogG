import api from './http';

const getAllPosts = () => {
	return api.get('/posts');
};

const getOnePost = (id) => {
	return api.get(`/posts/${id}`);
};

const deleteOnePost = (id) => {
	return api.delete(`/posts/${id}`);
};

const createNewPost = (data) => {
	return api.post('/posts/', data);
};
const updatePost = (id, data) => {
	return api.patch(`/posts/${id}`, data);
};

const PostService = {
	getAllPosts,
	getOnePost,
	deleteOnePost,
	createNewPost,
	updatePost,
};

export default PostService;
