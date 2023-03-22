import {Posts} from "@/posts/views/Posts/Posts";
import {postsApi} from "@/posts/utils/postsApi";
import {Post} from "@/posts/hooks/usePostsApi/usePostsApi.types";

export default function PostsPage({posts}: {posts: Post[]}) {
    return (
        <Posts posts={posts}/>
    )
}

export async function getServerSideProps() {

    try {
        return {
            props: {
                posts: await postsApi.getPosts(),
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
}