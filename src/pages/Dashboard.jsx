import { useState } from "react";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  LocateFixed,
  MapPin,
  Plus,
  Search,
  ShieldCheck,
  Sun,
  Moon,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router";

import "../styles/dashboard.css";

export default function Dashboard() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const userName =
    profile?.name ||
    user?.user_metadata?.name ||
    "Citizen";

  /* ================= THEME ================= */

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("jandrishti-theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "jandrishti-theme",
      newTheme ? "dark" : "light"
    );
  };

  /* ================= LOGOUT ================= */

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div className={`jan-page ${darkMode ? "dark-mode" : ""}`}>

      {/* ================= NAVBAR ================= */}

      <header className="jan-navbar">

        <div className="jan-container navbar-inner">

          {/* BRAND */}

          <div className="jan-brand">

            <div className="brand-mark">
              JD
            </div>

            <div>
              <h2>JanDrishti</h2>
              <span>Civic Issue Platform</span>
            </div>

          </div>

          {/* NAVIGATION */}

          <nav className="main-nav">

            <button
              className="nav-link active"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>

            <button
              className="nav-link"
              onClick={() => navigate("/report")}
            >
              Report Issue
            </button>

            <button
              className="nav-link"
              onClick={() => navigate("/my-reports")}
            >
              My Reports
            </button>

            <button
              className="nav-link"
              onClick={() => navigate("/map")}
            >
              Issue Map
            </button>

          </nav>

          {/* NAVBAR ACTIONS */}

          <div className="navbar-actions">

            {/* DARK / LIGHT MODE */}

            <button
              className="theme-button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* SEARCH */}

            <button
              className="search-button"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* USER */}

            <div className="user-menu">

              <div className="user-avatar">
                {userName.charAt(0).toUpperCase()}
              </div>

              <div className="user-info">
                <strong>{userName}</strong>

                <span>
                  {profile?.role || "Citizen"}
                </span>
              </div>

            </div>

            {/* LOGOUT */}

            <button
              className="logout-link"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <main>

        <section className="hero-section">

          <div className="jan-container hero-content">

            {/* HERO TEXT */}

            <div className="hero-copy">

              <span className="hero-eyebrow">
                SMART CIVIC REPORTING
              </span>

              <h1>
                Make your
                <br />
                <span>neighbourhood better.</span>
              </h1>

              <p>
                Report local civic problems, track their
                progress, and verify whether they were
                actually resolved.
              </p>

              <div className="hero-buttons">

                <button
                  className="hero-primary"
                  onClick={() => navigate("/report")}
                >
                  <Plus size={19} />
                  Report an Issue
                </button>

                <button
                  className="hero-secondary"
                  onClick={() => navigate("/map")}
                >
                  <MapPin size={18} />
                  Explore Issues
                </button>

              </div>

              <div className="hero-note">

                <ShieldCheck size={15} />

                Your report helps improve your local community.

              </div>

            </div>

            {/* CIVIC VISUAL */}

            <div className="hero-visual">

              <div className="city-card">

                <div className="city-top">

                  <span>
                    LIVE CIVIC VIEW
                  </span>

                  <span className="live-dot">
                    ● LIVE
                  </span>

                </div>

                <div className="city-map">

                  <div className="map-road road-one"></div>

                  <div className="map-road road-two"></div>

                  <div className="map-road road-three"></div>

                  <div className="map-pin pin-one">
                    <MapPin size={25} />
                  </div>

                  <div className="map-pin pin-two">
                    <MapPin size={21} />
                  </div>

                  <div className="map-pin pin-three">
                    <MapPin size={20} />
                  </div>

                  <div className="map-location">

                    <LocateFixed size={17} />

                    Your area

                  </div>

                </div>

                <div className="map-footer">

                  <div>

                    <strong>
                      Nearby Issues
                    </strong>

                    <span>
                      Community reports
                    </span>

                  </div>

                  <div className="nearby-count">
                    12
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="stats-section">

          <div className="jan-container stats-row">

            {/* TOTAL */}

            <div className="stat-item">

              <div className="stat-symbol">
                <FileText size={20} />
              </div>

              <div>

                <span>
                  Total Reports
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>

            {/* IN PROGRESS */}

            <div className="stat-item">

              <div className="stat-symbol">
                <Clock3 size={20} />
              </div>

              <div>

                <span>
                  In Progress
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>

            {/* RESOLVED */}

            <div className="stat-item">

              <div className="stat-symbol">
                <CheckCircle2 size={20} />
              </div>

              <div>

                <span>
                  Resolved
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>

            {/* AWAITING VERIFICATION */}

            <div className="stat-item">

              <div className="stat-symbol">
                <AlertTriangle size={20} />
              </div>

              <div>

                <span>
                  Awaiting Verification
                </span>

                <strong>
                  0
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTENT ================= */}

        <section className="dashboard-section">

          <div className="jan-container content-grid">

            {/* ================= MAP ================= */}

            <div className="content-panel map-panel">

              <div className="panel-heading">

                <div>

                  <span className="panel-label">
                    COMMUNITY
                  </span>

                  <h2>
                    Issues near you
                  </h2>

                  <p>
                    Explore civic problems reported by citizens.
                  </p>

                </div>

                <button
                  className="panel-action"
                  onClick={() => navigate("/map")}
                >
                  View map
                  <ArrowRight size={15} />
                </button>

              </div>

              {/* MAP */}

              <div className="large-map">

                <div className="map-grid-lines"></div>

                <div className="map-road big-road-one"></div>

                <div className="map-road big-road-two"></div>

                <div className="map-road big-road-three"></div>

                <div className="large-pin pin-a">
                  <MapPin size={23} />
                </div>

                <div className="large-pin pin-b">
                  <MapPin size={23} />
                </div>

                <div className="large-pin pin-c">
                  <MapPin size={23} />
                </div>

                <div className="map-label label-a">
                  Pothole
                </div>

                <div className="map-label label-b">
                  Garbage
                </div>

                <div className="map-label label-c">
                  Streetlight
                </div>

                <button
                  className="map-locate"
                  onClick={() => navigate("/map")}
                >
                  <LocateFixed size={16} />
                  Locate me
                </button>

              </div>

            </div>

            {/* ================= RECENT REPORTS ================= */}

            <div className="content-panel reports-panel">

              <div className="panel-heading">

                <div>

                  <span className="panel-label">
                    YOUR ACTIVITY
                  </span>

                  <h2>
                    Recent reports
                  </h2>

                  <p>
                    Keep track of your submitted issues.
                  </p>

                </div>

                <button
                  className="panel-action"
                  onClick={() => navigate("/my-reports")}
                >
                  View all
                  <ArrowRight size={15} />
                </button>

              </div>

              <div className="reports-empty">

                <div className="empty-symbol">
                  <FileText size={25} />
                </div>

                <h3>
                  No reports yet
                </h3>

                <p>
                  When you report a civic issue,
                  its progress will appear here.
                </p>

                <button
                  className="empty-button"
                  onClick={() => navigate("/report")}
                >
                  <Plus size={16} />
                  Report your first issue
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="jan-footer">

        <div className="jan-container footer-inner">

          <div>

            <strong>
              JanDrishti
            </strong>

            <span>
              Report. Resolve. Verify.
            </span>

          </div>

          <div className="footer-right">

            <span>
              SDG 11 · Sustainable Cities & Communities
            </span>

            <button onClick={handleLogout}>
              Sign out
            </button>

          </div>

        </div>

      </footer>

    </div>
  );
}