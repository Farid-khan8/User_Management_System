import { useState, useContext } from "react";
import api from "../api/axios";
import { ToastContext } from "../context/ToastContext";
import ConfirmModal from "../components/ConfirmModal";

export default function AdminDashboard() {
    const { showToast } = useContext(ToastContext);

    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    // Confirmation modal state
    const [confirmData, setConfirmData] = useState(null);

    const fetchUsers = async (pageNumber = 1) => {
        try {
            setLoading(true);
            const res = await api.get(`/admin/users?page=${pageNumber}`);
            setUsers(res.data.users);
            setTotalPages(res.data.totalPages);
            setPage(res.data.currentPage);
            setShowTable(true);
        } catch {
            showToast("Failed to load users", "error");
        } finally {
            setLoading(false);
        }
    };

    // Open confirmation modal
    const confirmAction = (user) => {
        setConfirmData(user);
    };

    // Execute activate / deactivate
    const executeAction = async () => {
        if (!confirmData) return;

        try {
            const endpoint =
                confirmData.status === "active"
                    ? `/admin/users/${confirmData._id}/deactivate`
                    : `/admin/users/${confirmData._id}/activate`;

            await api.patch(endpoint);

            showToast(
                `User ${
                    confirmData.status === "active"
                        ? "deactivated"
                        : "activated"
                } successfully`,
                "success"
            );

            setConfirmData(null);
            fetchUsers(page);
        } catch {
            showToast("Failed to update user status", "error");
            setConfirmData(null);
        }
    };

    return (
        <div className="container mt-4">
            <h3>Admin Dashboard</h3>

            {/* Show Users Button */}
            <button
                className="btn btn-primary mb-3"
                onClick={() => fetchUsers(1)}
            >
                Show Users
            </button>

            {/* Users Table */}
            {showTable && (
                <>
                    {loading ? (
                        <p>Loading users...</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Email</th>
                                        <th>Full Name</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th style={{ width: "160px" }}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((u) => (
                                        <tr key={u._id}>
                                            <td>{u.email}</td>
                                            <td>{u.fullName}</td>
                                            <td>
                                                <span
                                                    className={`badge ${
                                                        u.role === "admin"
                                                            ? "bg-warning text-dark"
                                                            : "bg-secondary"
                                                    }`}
                                                >
                                                    {u.role}
                                                </span>
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge ${
                                                        u.status === "active"
                                                            ? "bg-success"
                                                            : "bg-danger"
                                                    }`}
                                                >
                                                    {u.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    className={`btn btn-sm ${
                                                        u.status === "active"
                                                            ? "btn-danger"
                                                            : "btn-success"
                                                    }`}
                                                    onClick={() =>
                                                        confirmAction(u)
                                                    }
                                                >
                                                    {u.status === "active"
                                                        ? "Deactivate"
                                                        : "Activate"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination */}
                    <nav>
                        <ul className="pagination">
                            <li
                                className={`page-item ${
                                    page === 1 && "disabled"
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => fetchUsers(page - 1)}
                                >
                                    Previous
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${
                                        page === i + 1 ? "active" : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => fetchUsers(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            <li
                                className={`page-item ${
                                    page === totalPages && "disabled"
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => fetchUsers(page + 1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            )}

            {/* Confirmation Modal */}
            {confirmData && (
                <ConfirmModal
                    title={
                        confirmData.status === "active"
                            ? "Deactivate User?"
                            : "Activate User?"
                    }
                    message={`Are you sure you want to ${
                        confirmData.status === "active"
                            ? "deactivate"
                            : "activate"
                    } ${confirmData.email}?`}
                    onConfirm={executeAction}
                    onCancel={() => setConfirmData(null)}
                />
            )}
        </div>
    );
}
