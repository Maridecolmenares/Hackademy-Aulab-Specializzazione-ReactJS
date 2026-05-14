import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login } = useContext(UserContext);

    const navigate = useNavigate();

    const onSubmit = async (user_data) => {

        await login({
            email: user_data.email,
            password: user_data.password
        });

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">

            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
            />
            {errors.email && (
                <p className="text-red-500">
                    {errors.email.message}
                </p>
            )}

            <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="input input-bordered input-lg mb-2 w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9] focus:outline-none"
            />
            {errors.password && (
                <p className="text-red-500">
                    {errors.password.message}
                </p>
            )}

            <button className="btn bg-[#702EE9] hover:bg-[#7f46e7] border-none text-white transition-colors duration-300">
                Login
            </button>

        </form>
    );
}