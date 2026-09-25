import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService.js";
import { useNavigate } from "react-router";

function Dashboard() {
    const { user, profile } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await logoutUser();
        navigate("/login");
    }

    return (
        <div style={{ padding: "40px" }}>
            <h1>JanDrishti Dashboard</h1>

            <h2>Welcome, {profile?.name || "Citizen"} 👋</h2>

            <p>Email: {user?.email}</p>

            <p>Role: {profile?.role}</p>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;