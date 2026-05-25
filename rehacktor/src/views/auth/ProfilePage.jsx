import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Ryu from "../../assets/ryu.jpg";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase";

export default function ProfilePage() {
    const { user, profile } = useContext(UserContext);
    const [avatarUrl, setAvatarUrl] = useState();

    const download_avatar = async () => {

        if (profile.avatar_url) {
            const { data, error } = await supabase.storage
                .from('avatars')
                .download(profile.avatar_url);
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        }
    };

    useEffect(() => {
        download_avatar();
    }, [profile]);

    return (
        <main className="h-screen">

            {user && profile && (

                <>
                    <article className="mt-10 flex flex-col items-center">

                        <img
                            src={avatarUrl ?? Ryu}
                            className="w-[120px] h-[120px] rounded-full border-4 border-[#702EE9] object-cover shadow-lg"
                            alt="Profile Image"
                        />

                        <h2 className="text-2xl font-bold mt-5 text-white">
                            {profile.first_name}
                        </h2>

                    </article>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 lg:px-36 mt-10">

                        <article className="bg-[#111C66]/70 backdrop-blur-md border border-[#2B3F77] text-white rounded-2xl p-8 shadow-xl">

                            <h3 className="font-bold text-xl mb-4 text-[#C084FC]">
                                Your data
                            </h3>

                            <p className="mb-2 text-gray-300">
                                Name: {profile.first_name} {profile.last_name}
                            </p>

                            <p className="mb-2 text-gray-300">
                                Username: {profile.username}
                            </p>

                            <p className="mb-2 text-gray-300">
                                Email: {user.email}
                            </p>

                            <Link
                                className="btn mt-5 bg-[#702EE9] border-none text-white hover:bg-[#8B5CF6] transition"
                                to={routes.profile_settings}>
                                Settings
                            </Link>
                            <p className="text-sm text-gray-400 mt-3">
                                Change your avatar in Settings
                            </p>

                        </article>

                    </section>
                </>
            )}

        </main>
    );
}