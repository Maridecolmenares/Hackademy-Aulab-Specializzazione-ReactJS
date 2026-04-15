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
            <h1>Register</h1>

            <main id="form_section">
                <form id="custom_form" onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="text"
                        placeholder="Name"
                        className="custom_input"
                        {...register("username", {
                            required: "Name is required",
                            maxLength: {
                                value: 50,
                                message: "Max 50 characters"
                            }
                        })}
                    />
                    {errors.username && <p className="error text-red">{errors.username.message}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        className="custom_input"
                        {...register("email", {
                            required: "Email is required",
                            maxLength: {
                                value: 50,
                                message: "Max 50 characters"
                            }
                        })}
                    />
                    {errors.email && <p className="error text-red">{errors.email.message}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        className="custom_input"
                        {...register("password", {
                            required: "Password is required",
                            maxLength: {
                                value: 50,
                                message: "Max 50 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="error text-red">{errors.password.message}</p>}

                    <button id="form_btn">Register</button>
                </form>
            </main>
        </>
    );
}