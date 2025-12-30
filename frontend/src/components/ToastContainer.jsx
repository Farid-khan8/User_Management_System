import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import "../styles/toast.css";

export default function ToastContainer() {
    const { toasts } = useContext(ToastContext);

    return (
        <div className="toast-container-custom">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`alert alert-${mapType(toast.type)} toast-item`}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
}

function mapType(type) {
    if (type === "error") return "danger";
    if (type === "info") return "info";
    return "success";
}
