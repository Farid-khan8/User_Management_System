import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { ToastContext } from "../context/ToastContext";
import "../styles/auth.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
    });

    const validate = () => {
        if (!form.fullName || !form.email || !form.password) {
            showToast("All fields are required", "error");
            return false;
        }

        if (!emailRegex.test(form.email)) {
            showToast("Invalid email format", "error");
            return false;
        }

        if (form.password.length < 6) {
            showToast("Password must be at least 6 characters", "error");
            return false;
        }

        if (!/[A-Z]/.test(form.password) || !/[0-9]/.test(form.password)) {
            showToast(
                "Password must include uppercase letter and number",
                "error"
            );
            return false;
        }

        if (form.password !== form.confirmPassword) {
            showToast("Passwords do not match", "error");
            return false;
        }

        return true;
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await api.post("/auth/signup", form);
            showToast("Account created successfully", "success");
            navigate("/login");
        } catch (err) {
            showToast(err.response?.data?.message || "Signup failed", "error");
        }
    };

    return (
        <div className="page-center">
            <div className="card auth-card">
                <div className="card-body">
                    <h4 className="text-center mb-3">Signup</h4>

                    <form onSubmit={submit}>
                        <input
                            className="form-control mb-2"
                            placeholder="Full Name"
                            onChange={(e) =>
                                setForm({ ...form, fullName: e.target.value })
                            }
                        />

                        <input
                            className="form-control mb-2"
                            placeholder="Email"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Password"
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />

                        <input
                            type="password"
                            className="form-control mb-2"
                            placeholder="Confirm Password"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />

                        <select
                            className="form-select mb-3"
                            value={form.role}
                            onChange={(e) =>
                                setForm({ ...form, role: e.target.value })
                            }
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button className="btn btn-success w-100">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-3">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
