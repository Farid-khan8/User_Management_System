import { createContext, useEffect, useState, useCallback } from "react";
import { toastEmitter } from "../utils/toastEmitter";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    // Centralized toast function
    const showToast = useCallback(
        (message, type = "success", duration = 3000) => {
            const id = Date.now();

            setToasts((prev) => [...prev, { id, message, type }]);

            // Auto-dismiss toast
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, duration);
        },
        []
    );

    // Listen to global toastEmitter events
    useEffect(() => {
        if (!toastEmitter) return;

        const successHandler = (msg) => showToast(msg, "success");
        const errorHandler = (msg) => showToast(msg, "error");
        const infoHandler = (msg) => showToast(msg, "info");

        toastEmitter.on("success", successHandler);
        toastEmitter.on("error", errorHandler);
        toastEmitter.on("info", infoHandler);

        return () => {
            toastEmitter.off("success", successHandler);
            toastEmitter.off("error", errorHandler);
            toastEmitter.off("info", infoHandler);
        };
    }, [showToast]);

    return (
        <ToastContext.Provider value={{ showToast, toasts }}>
            {children}
        </ToastContext.Provider>
    );
}
