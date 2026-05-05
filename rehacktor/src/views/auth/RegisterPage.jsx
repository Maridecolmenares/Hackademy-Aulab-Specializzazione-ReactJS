import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">

            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="input"
            />

            <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
                className="input"
            />

            <button className="btn bg-[#702EE9] text-white">
                Register
            </button>

        </form>
    );
}