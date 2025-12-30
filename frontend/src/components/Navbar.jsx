import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContext } from "../context/ToastContext";
import "../styles/navbar.css";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    if (!user) return null;

    const handleLogout = () => {
        logout(); // clear token + user
        showToast("Logged out successfully", "info");
        navigate("/login", { replace: true });
    };

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-4">
            <Link className="navbar-brand" to="/">
                AuthApp
            </Link>

            <div className="ms-auto d-flex align-items-center gap-3 flex-wrap">
                <span className="text-light">
                    {user.fullName} ({user.role})
                </span>

                {user.role === "admin" && (
                    <Link
                        className="btn btn-outline-warning btn-sm"
                        to="/admin"
                    >
                        Admin
                    </Link>
                )}

                <Link className="btn btn-outline-info btn-sm" to="/profile">
                    Profile
                </Link>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
