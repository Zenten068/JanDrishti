import { supabase } from "../lib/supabaseClient";

export async function registerUser(name, email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    });

    return { data, error };
}

export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    return { error };
}

export async function getCurrentUser() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}