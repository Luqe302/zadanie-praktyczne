import {PostsProps} from "@/posts/views/Posts/Posts.types";
import {Post} from "@/posts/components/Post/Post";

export const Posts = ({posts}: PostsProps) => {
    return <div>{posts.map((post) => <Post key={post.id} post={post}/>)}
        <a href='/posts/new'>Add new post</a>
    </div>
}