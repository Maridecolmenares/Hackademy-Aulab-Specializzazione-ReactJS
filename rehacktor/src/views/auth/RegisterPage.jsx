import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/supabase";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const navigate = useNavigate();
    const { signUp } = useContext(UserContext);

    const onSubmit = async (user_data) => {

        await signUp({
            email: user_data.email,
            password: user_data.password,
            options: {
                data: {
                    first_name: user_data.first_name,
                    last_name: user_data.last_name,
                    username: user_data.username
                }
            }
        });

        navigate('/');
    };

    return (
        <main className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">

                <input
                    type="text"
                    placeholder="Name"
                    className=" input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
                    {...register("first_name", { required: "This field is required" })}

                />
                {errors.first_name && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.first_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
                    {...register("last_name", { required: "This field is required" })}

                />
                {errors.last_name && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.last_name.message}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
                    {...register("username", { required: "This field is required" })}

                />
                {errors.username && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.username.message}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
                    {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.email.message}
                    </p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
                    {...register("password", {
                        required: "This field is required", minLength: { value: 8, message: "Password must be at least 8 characters" }
                    })}
                />
                {errors.password && (
                    <p role="alert" className="text-red-500 mb-6">
                        {errors.password.message}
                    </p>
                )}

                <button className="btn bg-[#702EE9] hover:bg-[#7f46e7] border-none text-white transition-colors duration-300">
                    Sign in
                </button>

            </form>
        </main>
    );
}