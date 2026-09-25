import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    async function loadProfile(currentUser) {
        if (!currentUser) {
            setProfile(null);
            return;
        }

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", currentUser.id)
            .single();

        if (error) {
            console.error("Profile error:", error.message);
            setProfile(null);
            return;
        }

        setProfile(data);
    }

    useEffect(() => {
        let mounted = true;

        async function loadSession() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!mounted) return;

            setUser(session?.user ?? null);

            if (session?.user) {
                await loadProfile(session.user);
            }

            setLoading(false);
        }

        loadSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
            setUser(session?.user ?? null);

            if (session?.user) {
                await loadProfile(session.user);
            } else {
                setProfile(null);
            }

            setLoading(false);
        });

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                profile,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}