export default function ConfirmModal({
    title = "Are you sure?",
    message = "This action cannot be undone.",
    onConfirm,
    onCancel,
}) {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h3>{title}</h3>
                <p>{message}</p>

                <div style={styles.actions}>
                    <button onClick={onCancel} style={styles.cancel}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} style={styles.confirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "6px",
        width: "300px",
    },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "15px",
    },
    cancel: {
        background: "#ccc",
        border: "none",
        padding: "6px 12px",
        cursor: "pointer",
    },
    confirm: {
        background: "crimson",
        color: "#fff",
        border: "none",
        padding: "6px 12px",
        cursor: "pointer",
    },
};
