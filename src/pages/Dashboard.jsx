import {
    AlertTriangle,
    CheckCircle2,
    Clock3,
    FileText,
    MapPin,
    Plus,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../Services/authService";
import { useNavigate } from "react-router";

export default function Dashboard() {
    const { user, profile } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate("/login");
    };

    const userName = profile?.name || user?.user_metadata?.name || "Citizen";

    return (
        <div className="app-shell">

            {/* Sidebar */}
            <aside className="sidebar">

                <div className="brand">
                    <div className="brand-icon">
                        JD
                    </div>

                    <div>
                        <h2>JanDrishti</h2>
                        <span>Civic Platform</span>
                    </div>
                </div>

                <nav className="sidebar-nav">

                    <button className="nav-item active">
                        <FileText size={19} />
                        Dashboard
                    </button>

                    <button
                        className="nav-item"
                        onClick={() => navigate("/report")}
                    >
                        <Plus size={19} />
                        Report Issue
                    </button>

                    <button className="nav-item">
                        <AlertTriangle size={19} />
                        My Reports
                    </button>

                    <button className="nav-item">
                        <MapPin size={19} />
                        Issue Map
                    </button>

                    <button className="nav-item">
                        <UserRound size={19} />
                        Profile
                    </button>

                </nav>

                <div className="sidebar-bottom">

                    <div className="role-box">
                        <ShieldCheck size={18} />

                        <div>
                            <span>Logged in as</span>
                            <strong>
                                {profile?.role || "citizen"}
                            </strong>
                        </div>
                    </div>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </aside>

            {/* Main Content */}
            <main className="main-content">

                {/* Topbar */}
                <header className="topbar">

                    <div>
                        <span className="page-label">
                            Citizen Dashboard
                        </span>

                        <h1>Welcome back, {userName} 👋</h1>
                    </div>

                    <div className="profile-circle">
                        {userName.charAt(0).toUpperCase()}
                    </div>

                </header>

                {/* Welcome Banner */}
                <section className="welcome-card">

                    <div>
                        <span className="welcome-tag">
                            MAKE YOUR CITY BETTER
                        </span>

                        <h2>
                            See an issue?
                            <br />
                            <span>Report it.</span>
                        </h2>

                        <p>
                            Help your community report civic problems
                            and track them until they are actually resolved.
                        </p>

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/report")}
                        >
                            <Plus size={19} />
                            Report an Issue
                        </button>
                    </div>

                    <div className="welcome-visual">
                        <MapPin size={80} strokeWidth={1.3} />
                    </div>

                </section>

                {/* Stats */}
                <section className="stats-grid">

                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <FileText size={21} />
                        </div>

                        <div>
                            <span>Total Reports</span>
                            <strong>0</strong>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">
                            <Clock3 size={21} />
                        </div>

                        <div>
                            <span>In Progress</span>
                            <strong>0</strong>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">
                            <CheckCircle2 size={21} />
                        </div>

                        <div>
                            <span>Resolved</span>
                            <strong>0</strong>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon red">
                            <AlertTriangle size={21} />
                        </div>

                        <div>
                            <span>Needs Verification</span>
                            <strong>0</strong>
                        </div>
                    </div>

                </section>

                {/* Bottom Grid */}
                <section className="dashboard-grid">

                    {/* Recent Reports */}
                    <div className="dashboard-card">

                        <div className="card-header">
                            <div>
                                <h3>Recent Reports</h3>
                                <p>Your latest civic issue reports</p>
                            </div>

                            <button className="text-btn">
                                View All
                            </button>
                        </div>

                        <div className="empty-state">

                            <div className="empty-icon">
                                <FileText size={25} />
                            </div>

                            <h4>No reports yet</h4>

                            <p>
                                Your reported civic issues will appear here.
                            </p>

                            <button
                                className="secondary-btn"
                                onClick={() => navigate("/report")}
                            >
                                Report your first issue
                            </button>

                        </div>

                    </div>

                    {/* Quick Actions */}
                    <div className="dashboard-card">

                        <div className="card-header">
                            <div>
                                <h3>Quick Actions</h3>
                                <p>Common things you can do</p>
                            </div>
                        </div>

                        <div className="quick-actions">

                            <button
                                className="quick-action"
                                onClick={() => navigate("/report")}
                            >
                                <div className="quick-icon">
                                    <Plus size={20} />
                                </div>

                                <div>
                                    <strong>Report an Issue</strong>
                                    <span>Submit a new civic complaint</span>
                                </div>
                            </button>

                            <button className="quick-action">
                                <div className="quick-icon">
                                    <MapPin size={20} />
                                </div>

                                <div>
                                    <strong>Explore Issue Map</strong>
                                    <span>See reported problems nearby</span>
                                </div>
                            </button>

                            <button className="quick-action">
                                <div className="quick-icon">
                                    <CheckCircle2 size={20} />
                                </div>

                                <div>
                                    <strong>Verify Resolution</strong>
                                    <span>Confirm whether an issue is fixed</span>
                                </div>
                            </button>

                        </div>

                    </div>

                </section>

            </main>
        </div>
    );
}