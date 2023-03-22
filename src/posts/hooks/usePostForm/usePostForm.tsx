import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {CreatePost} from "@/posts/hooks/usePostForm/usePostForm.types";

export function usePostForm() {
    const validationSchema = yup.object({
        title: yup.string().required('Required title'),
        description: yup.string().required('Required title'),
    });

    const {
        handleSubmit,
        register,
        formState: { isValid },
    } = useForm<CreatePost>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    return { handleSubmit, isValid, register };
}
