import {PostFormProps} from "@/posts/components/PostForm/PostForm.types";
import {usePostForm} from "@/posts/hooks/usePostForm/usePostForm";

export const PostForm = ({onSubmit}: PostFormProps) => {
    const {handleSubmit, isValid, register} = usePostForm();

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Title:
            <input {...register("title")}/>
        </label>
        <label>
            Description:
            <input {...register("description")}/>
        </label>
        <input type='submit' value='submit' disabled={!isValid}/>

    </form>
}