import { useState } from "react";
import { registerUser } from "../Services/authService.js";
import { useNavigate, Link } from "react-router";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    async function handleRegister(e) {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        const { data, error } = await registerUser(
            name,
            email,
            password
        );

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        if (data.user && !data.session) {
            setSuccess(
                "Registration successful! Please check your email to verify your account."
            );
        } else {
            navigate("/dashboard");
        }

        setLoading(false);
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>JanDrishti</h1>

                <p>Create your citizen account</p>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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
                        minLength="6"
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                {error && <p className="error">{error}</p>}

                {success && <p className="success">{success}</p>}

                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;