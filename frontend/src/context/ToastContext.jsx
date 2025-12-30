import { createContext, useEffect, useState } from "react";
import { toastEmitter } from "../utils/toastEmitter";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    // manual toast trigger
    const showToast = (message, type = "success") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    // auto toast listener (optional, but safe)
    useEffect(() => {
        if (!toastEmitter) return;

        const handler = (type, message) => {
            showToast(message, type);
        };

        toastEmitter.on("success", (msg) => handler("success", msg));
        toastEmitter.on("error", (msg) => handler("error", msg));
        toastEmitter.on("info", (msg) => handler("info", msg));

        return () => toastEmitter.all.clear();
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, toasts }}>
            {children}
        </ToastContext.Provider>
    );
}
