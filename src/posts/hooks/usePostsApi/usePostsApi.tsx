import {useMutation, useQuery} from '@tanstack/react-query';
import {PostsApiQueryKey} from "@/posts/hooks/usePostsApi/usePostsApi.types";
import {postsApi} from "@/posts/utils/postsApi";
import {CreatePost} from "@/posts/hooks/usePostForm/usePostForm.types";

const postsApiUrl = 'http://localhost:3005/posts';
export const usePostsApi = () => {
    const useGetPosts = () => useQuery({
        queryKey: [PostsApiQueryKey.GetPosts],
        queryFn: postsApi.getPosts
    })

    const useCreatePost = () => useMutation({
        mutationFn: (payload: CreatePost) => postsApi.createPost(payload)
    })

    const useDeletePost = () => useMutation({
        mutationFn: (postId: number) => postsApi.deletePost(postId)
    })

    return {useGetPosts, useCreatePost, useDeletePost}
}