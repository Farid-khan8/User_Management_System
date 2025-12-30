import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Dashboard</h3>

            <div className="row">
                <div className="col-md-6">
                    <div className="card dashboard-card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <strong>User Information</strong>
                        </div>

                        <div className="card-body">
                            <p>
                                <strong>Name:</strong>{" "}
                                <span className="text-muted">
                                    {user.fullName}
                                </span>
                            </p>

                            <p>
                                <strong>Email:</strong>{" "}
                                <span className="text-muted">{user.email}</span>
                            </p>

                            <p>
                                <strong>Role:</strong>{" "}
                                <span
                                    className={`badge ${
                                        user.role === "admin"
                                            ? "bg-warning text-dark"
                                            : "bg-secondary"
                                    }`}
                                >
                                    {user.role}
                                </span>
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                <span className="badge bg-success">Active</span>
                            </p>
                        </div>

                        <div className="card-footer text-muted small">
                            Logged in as <strong>{user.role}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
