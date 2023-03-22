import {Posts} from "@/posts/views/Posts/Posts";
import {GetPosts} from "@/posts/components/GetPosts/GetPosts";
import {postsApi} from "@/posts/utils/postsApi";
import {Post as PostComponent} from "@/posts/components/Post/Post";
import {Post} from "@/posts/hooks/usePostsApi/usePostsApi.types";

export default function PostPage({post}: {post: Post}) {
    return (
        <PostComponent post={post}/>
    )
}

export async function getServerSideProps(context: { query: { postId?: string } }) {
    const postId = context.query.postId;

    if (!postId) {
        return {
            notFound: true,
        };
    }

    try {
        return {
            props: {
                post: await postsApi.getPost(postId),
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
}