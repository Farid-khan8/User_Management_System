export default function Loader() {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
            <p>Loading...</p>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
    },
    spinner: {
        width: "40px",
        height: "40px",
        border: "4px solid #ddd",
        borderTop: "4px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
};
