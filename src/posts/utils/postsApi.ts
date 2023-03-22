import axios from "axios";
import {Post} from "@/posts/hooks/usePostsApi/usePostsApi.types";
import {CreatePost} from "@/posts/hooks/usePostForm/usePostForm.types";

const postsApiUrl = 'http://localhost:3005/posts';
const config = {headers: {'x-api-key': 'thisisapikey'}};
export const postsApi = {
    getPosts: () => axios.get<Post[]>(postsApiUrl, config).then((res) => res.data),
    getPost: (postId: string) => axios.get<Post>(`${postsApiUrl}/${postId}`, config).then((res) => res.data),
    createPost: (payload: CreatePost) => axios.post(`${postsApiUrl}`,  payload, config).then((res) => res.data),
    deletePost: (postId: number) => axios.delete(`${postsApiUrl}/${postId}`, config).then((res) => res.data)
}