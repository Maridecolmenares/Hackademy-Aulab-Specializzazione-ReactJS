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
            <h1>Login</h1>
            <main id="form_section">

                <form id="custom_form" onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            className="custom_input"
                            {...register("email", {
                                required: "Email is required",
                                maxLength: {
                                    value: 50,
                                    message: "Max 50 characters"
                                }
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            className="custom_input"
                            {...register("password", {
                                required: "Password is required",
                                maxLength: {
                                    value: 50,
                                    message: "Max 50 characters"
                                }
                            })}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>

                    <button id="form_btn">Login</button>
                </form>
            </main>
        </>
    )
}