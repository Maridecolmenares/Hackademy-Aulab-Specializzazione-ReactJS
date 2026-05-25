import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase";
import Ryu from "../../assets/ryu.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileSettingsPage() {


    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    const { profile, getUser } = useContext(UserContext);

    const handleChange = (e) => {
        setFile(() => e.target.files[0]);
    };

    useEffect(() => {

        if (file) {

            const imageUrl = URL.createObjectURL(file);

            setPreview(() => imageUrl);
        }

    }, [file]);

    const handleAvatarSubmit = async (e) => {
        e.preventDefault();
        const fileExt = file.name.split('.').pop();
        const fileName = `${profile.id}${Math.random()}.${fileExt}`;
        await supabase.storage.from('avatars').upload(fileName, file);
        await supabase
            .from('profiles')
            .update({ avatar_url: fileName })
            .eq('id', profile.id)
            .select();

        await getUser();
    };

    const { updateProfile } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {

        await updateProfile(data);

        navigate(routes.profile);
    };

    return (
        <main className="min-h-screen flex justify-center items-center px-4 py-10">

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* PROFILE FORM */}
                <form
                    className="bg-[#182B50] p-8 rounded-2xl shadow-xl border border-[#263B6B]"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <h2 className="text-2xl font-bold text-white mb-6">
                        Profile Settings
                    </h2>

                    <div className="flex flex-col gap-5">

                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-lg w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9]"
                                {...register("first_name", {
                                    required: "This field is required"
                                })}
                            />

                            {errors.first_name && (
                                <p role="alert" className="text-red-500 mt-2">
                                    {errors.first_name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered input-lg w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9]"
                                {...register("last_name", {
                                    required: "This field is required"
                                })}
                            />

                            {errors.last_name && (
                                <p role="alert" className="text-red-500 mt-2">
                                    {errors.last_name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="input input-bordered input-lg w-full bg-[#1E356A] text-white placeholder:text-gray-400 border-[#2B3F77] focus:border-[#702EE9]"
                                {...register("username", {
                                    required: "This field is required"
                                })}
                            />

                            {errors.username && (
                                <p role="alert" className="text-red-500 mt-2">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        <button className="btn bg-[#702EE9] border-none text-white hover:bg-[#7f46e7] mt-2">
                            Save Changes
                        </button>

                    </div>

                </form>

                {/* AVATAR FORM */}
                <form
                    className="bg-[#182B50] p-8 rounded-2xl shadow-xl border border-[#263B6B] flex flex-col"
                    onSubmit={handleAvatarSubmit}
                >

                    <h2 className="text-2xl font-bold text-white mb-6">
                        Change Avatar
                    </h2>

                    <div className="flex flex-col items-center gap-6">

                        <img
                            src={preview ?? Ryu}
                            alt=""
                            className="w-40 h-40 rounded-full object-cover border-4 border-[#702EE9]"
                        />

                        <input
                            type="file"
                            className="file-input w-full bg-[#1E356A] text-white border-[#2B3F77]"
                            onChange={handleChange}
                        />

                        <button className="btn bg-[#702EE9] border-none text-white hover:bg-[#7f46e7] w-full">
                            Upload Avatar
                        </button>

                    </div>

                </form>
                <div className="col-span-1 lg:col-span-2 flex justify-center mt-2">
                    <Link
                        to={routes.profile}
                        className="flex items-center gap-2 bg-[#702EE9] hover:bg-[#7f46e7] text-white px-6 py-3 rounded-xl shadow-lg transition"
                    >
                        <FaArrowLeft />
                        Back to Profile
                    </Link>
                </div>

            </div>

        </main>
    )
}