import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/customers`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
  axios.post(`${URL}/posts/update`, payload);