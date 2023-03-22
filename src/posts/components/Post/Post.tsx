import {useRouter} from 'next/router';
import {PostProps} from "@/posts/components/Post/Post.types";
import * as S from './Post.styles';
import {usePostsApi} from "@/posts/hooks/usePostsApi/usePostsApi";

export const Post = ({post}: PostProps) => {
    const {push} = useRouter();
    const {useDeletePost} = usePostsApi()
    const {mutate} = useDeletePost()

    const handleRemove = () => {
        mutate(post.id, {
            onSuccess: () => {
                alert('Post removed');
                push('/posts');
            }
        });
    }

    return <S.Wrapper>
        <h3><a href={`posts/${post.id}`}>{post.title}</a></h3>
        <div>{post.description}</div>
        <div>{post.createdAt}</div>
        <button onClick={handleRemove}>Remove post</button>
    </S.Wrapper>
}