export enum PostsApiQueryKey {
    GetPosts = 'getPosts',
    CreatePost = 'createPost'
}

export interface Post {
    title: string;
    description: string;
    createdAt: string;
    id: number;
}