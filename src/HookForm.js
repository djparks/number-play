import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import NumberFormat from 'react-number-format';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    nbr: yup.number().positive().integer().required(),
});

export default function HookForm() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {

        console.log(data);
    }

    return (
        <div >
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <NumberFormat  {...register("nbr")} type="text" value={''} displayType={'input'} />
            <p>{errors.nbr?.message}</p>

            <input type="submit" /> <input type="reset" />
        </form>
        </div>
    );
}