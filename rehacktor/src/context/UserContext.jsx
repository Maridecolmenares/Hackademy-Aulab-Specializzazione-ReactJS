import { createContext, useEffect, useState } from "react";
import { supabase } from "../database/supabase";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    // GET USER
    const getUser = async () => {

        const { data: { session } } = await supabase.auth.getSession();

        if (session) {

            setUser(session.user);

            const { data: profiles } = await supabase
                .from('profiles')
                .select()
                .eq('id', user.id);

            setProfile(profiles[0]);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    // LOGOUT
    const signOut = async () => {

        await supabase.auth.signOut();

        setUser(null);
        setProfile(null);
    };

    // REGISTER
    const signUp = async (newUser) => {

        await supabase.auth.signUp(newUser);

        await getUser();
    };

    // LOGIN
    const login = async (loggedUser) => {

        await supabase.auth.signInWithPassword(loggedUser);

        await getUser();
    };

    return (
        <UserContext.Provider
            value={{
                user,
                profile,
                signOut,
                signUp,
                login,
                getUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}