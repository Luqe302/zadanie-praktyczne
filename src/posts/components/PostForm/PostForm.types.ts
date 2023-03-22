import {CreatePost} from "@/posts/hooks/usePostForm/usePostForm.types";

export interface PostFormProps {
    onSubmit: (payload: CreatePost) => void;
}