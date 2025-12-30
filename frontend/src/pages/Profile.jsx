import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import "../styles/profile.css";
import { ToastContext } from "../context/ToastContext";

export default function Profile() {
    const { showToast } = useContext(ToastContext);

    const [profile, setProfile] = useState({ fullName: "", email: "" });
    const [originalProfile, setOriginalProfile] = useState({
        fullName: "",
        email: "",
    });
    const [password, setPassword] = useState("");

    useEffect(() => {
        api.get("/user/me").then((res) => {
            const data = {
                fullName: res.data.fullName,
                email: res.data.email,
            };
            setProfile(data);
            setOriginalProfile(data); // 🔐 store original
        });
    }, []);

    const updateProfile = async () => {
        try {
            await api.put("/user/update", profile);
            setOriginalProfile(profile); // update baseline
            showToast("Profile updated successfully", "success");
        } catch (err) {
            showToast(
                err.response?.data?.message || "Failed to update profile",
                "error"
            );
        }
    };

    const cancelProfileUpdate = () => {
        setProfile(originalProfile); // 🔁 revert changes
        showToast("Changes discarded", "info");
    };

    const changePassword = async () => {
        if (!password || password.trim().length < 6) {
            showToast("Password must be at least 6 characters", "error");
            return;
        }

        try {
            await api.put("/user/password", { password });
            setPassword("");
            showToast("Password changed successfully", "success");
        } catch (err) {
            showToast(
                err.response?.data?.message || "Failed to change password",
                "error"
            );
        }
    };

    return (
        <div className="container mt-4 profile-page">
            <h3>Profile</h3>

            {/* Update Profile */}
            <div className="card mb-4">
                <div className="card-body">
                    <h5>Update Profile</h5>

                    <input
                        className="form-control mb-2"
                        value={profile.fullName}
                        onChange={(e) =>
                            setProfile({ ...profile, fullName: e.target.value })
                        }
                    />

                    <input
                        className="form-control mb-3"
                        value={profile.email}
                        onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                        }
                    />

                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={updateProfile}
                        >
                            Save
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={cancelProfileUpdate}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            {/* Change Password */}
            <div className="card">
                <div className="card-body">
                    <h5>Change Password</h5>

                    <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="btn btn-warning"
                        disabled={!password}
                        onClick={changePassword}
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
}
