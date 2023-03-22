import React from 'react';
import {Post} from "@/posts/hooks/usePostsApi/usePostsApi.types";
import {Alert, CircularProgress} from '@mui/material';
import {usePostsApi} from '../../hooks/usePostsApi/usePostsApi';

export const GetPosts = ({children, ...props}: { children: (posts: Post[]) => React.ReactNode }) => {
    const {useGetPosts} = usePostsApi();

    const {isLoading, data, isSuccess, error} = useGetPosts();

    if (isLoading) {
        return <CircularProgress {...props} />
    }

    if (isSuccess && data) {
        return <div {...props}>{children(data)}</div>
    }

    return <Alert severity="error" {...props}><>Something went wrong. Error: ${error?.toString()}</>
    </Alert>
}
