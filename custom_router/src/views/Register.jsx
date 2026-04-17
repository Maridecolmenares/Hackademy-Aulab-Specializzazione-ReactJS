import { useContext } from "react";
import { UserContext } from "../context/UseContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
    const { register: registerUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        registerUser({
            name: data.username,
            email: data.email
        });

        navigate('/');
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">Register</h1>

            <main id="form_section" className="flex justify-center items-center min-h-[80vh]">

                <form
                    id="custom_form"
                    className="flex flex-col gap-4 p-6 bg-base-100 shadow-xl rounded-xl w-80"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <input
                        className="input input-bordered w-full"
                        placeholder="Name"
                        {...register("username", {
                            required: "Name is required",
                            maxLength: { value: 50, message: "Max 50 characters" }
                        })}
                    />
                    {errors.username && <p className="text-error text-sm">{errors.username.message}</p>}

                    <input
                        className="input input-bordered w-full"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            maxLength: { value: 50, message: "Max 50 characters" }
                        })}
                    />
                    {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

                    <input
                        type="password"
                        className="input input-bordered w-full"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            maxLength: { value: 50, message: "Max 50 characters" }
                        })}
                    />
                    {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}

                    <button id="form_btn" className="btn btn-primary w-full">
                        Register
                    </button>
                </form>
            </main>
        </>
    );
}