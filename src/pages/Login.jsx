import { useState } from "react";
import { loginUser } from "../services/authService.js";
import { useNavigate, Link } from "react-router";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        setError("");
        setLoading(true);

        const { data, error } = await loginUser(email, password);

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        if (data.user) {
            navigate("/dashboard");
        }

        setLoading(false);
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome Back</h1>

                <p>Login to JanDrishti</p>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {error && <p className="error">{error}</p>}

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Create Account</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;