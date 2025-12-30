import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", form);
            login(res.data);
            navigate("/");
        } catch {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="page-center">
            <div className="card auth-card">
                <div className="card-body">
                    <h4 className="text-center mb-3">Login</h4>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                placeholder="Email"
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button className="btn btn-primary w-100">Login</button>
                    </form>

                    <p className="text-center mt-3">
                        No account? <Link to="/signup">Signup</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
