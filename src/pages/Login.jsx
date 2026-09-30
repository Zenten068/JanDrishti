import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Moon, Sun, ShieldCheck } from "lucide-react";

import { loginUser } from "../services/authService";
import "../styles/auth.css";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("jandrishti-theme") === "dark";
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleTheme = () => {
        const newTheme = !darkMode;

        setDarkMode(newTheme);

        localStorage.setItem(
            "jandrishti-theme",
            newTheme ? "dark" : "light"
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        const { data, error } = await loginUser(
            email,
            password
        );

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        if (data?.session) {
            navigate("/dashboard");
        } else {
            setError("Login successful, but no session was created.");
        }

        setLoading(false);
    };

    return (
        <div
            className={`auth-page ${darkMode ? "dark-mode" : ""
                }`}
        >

            {/* ================= TOP BAR ================= */}

            <header className="auth-header">

                <div className="auth-brand">

                    <div className="auth-brand-mark">
                        JD
                    </div>

                    <div>
                        <strong>JanDrishti</strong>

                        <span>
                            Civic Issue Platform
                        </span>
                    </div>

                </div>

                <button
                    className="auth-theme-button"
                    onClick={toggleTheme}
                    type="button"
                    aria-label="Toggle theme"
                    title={
                        darkMode
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >
                    {darkMode ? (
                        <Sun size={18} />
                    ) : (
                        <Moon size={18} />
                    )}
                </button>

            </header>


            {/* ================= LOGIN AREA ================= */}

            <main className="auth-main">

                <div className="auth-card">

                    {/* LEFT SIDE */}

                    <div className="auth-intro">

                        <div className="auth-intro-icon">
                            <ShieldCheck size={22} />
                        </div>

                        <span className="auth-eyebrow">
                            JANDRISHTI
                        </span>

                        <h1>
                            Welcome Back
                        </h1>

                        <p>
                            Sign in to report civic issues,
                            track your complaints and verify
                            resolutions in your community.
                        </p>

                        <div className="auth-intro-line"></div>

                        <span className="auth-intro-note">
                            Report. Resolve. Verify.
                        </span>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="auth-form-section">

                        <div className="auth-form-heading">

                            <h2>
                                Login
                            </h2>

                            <p>
                                Access your JanDrishti account
                            </p>

                        </div>


                        <form
                            className="auth-form"
                            onSubmit={handleSubmit}
                        >

                            {/* EMAIL */}

                            <div className="form-field">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                    autoComplete="email"
                                />

                            </div>


                            {/* PASSWORD */}

                            <div className="form-field">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <div className="password-wrapper">

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        autoComplete="current-password"
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} />
                                        ) : (
                                            <Eye size={17} />
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* ERROR */}

                            {error && (
                                <div className="auth-error">
                                    {error}
                                </div>
                            )}


                            {/* LOGIN */}

                            <button
                                type="submit"
                                className="auth-submit"
                                disabled={loading}
                            >
                                {loading
                                    ? "Signing in..."
                                    : "Login"}
                            </button>

                        </form>


                        {/* REGISTER */}

                        <div className="auth-register">

                            <span>
                                Don't have an account?
                            </span>

                            <Link to="/register">
                                Create Account
                            </Link>

                        </div>

                    </div>

                </div>

            </main>


            {/* ================= FOOTER ================= */}

            <footer className="auth-footer">

                <span>
                    JanDrishti
                </span>

                <span>
                    SDG 11 · Sustainable Cities & Communities
                </span>

            </footer>

        </div>
    );
}