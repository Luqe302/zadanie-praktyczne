import {PostForm} from "@/posts/components/PostForm/PostForm";
import {CreatePost} from "@/posts/hooks/usePostForm/usePostForm.types";
import {usePostsApi} from "@/posts/hooks/usePostsApi/usePostsApi";
import {useRouter} from "next/router";

export const NewPost = () => {
    const {push} = useRouter();
    const {useCreatePost} = usePostsApi()
    const {mutate} = useCreatePost()

    const handleSubmit = (payload: CreatePost) => {
        mutate(payload, {
            onSuccess: () => {
                push('/posts')
            }
        })
    }

    return <PostForm onSubmit={handleSubmit}/>
}

