import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UseContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        if (!user) {
            alert("User not registered!");
            return;
        }

        if (data.email === user.email) {
            alert("Login successful!");
            navigate('/');
        } else {
            alert("Wrong email!");
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">Login</h1>

            <main id="form_section" className="flex justify-center items-center min-h-[80vh]">

                <form
                    id="custom_form"
                    className="flex flex-col gap-4 p-6 bg-base-100 shadow-xl rounded-xl w-80"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div>
                        <label className="block mb-1">Email:</label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email is required",
                                maxLength: { value: 50, message: "Max 50 characters" }
                            })}
                        />
                        {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block mb-1">Password:</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                maxLength: { value: 50, message: "Max 50 characters" }
                            })}
                        />
                        {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}
                    </div>

                    <button id="form_btn" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>
            </main>
        </>
    )
}