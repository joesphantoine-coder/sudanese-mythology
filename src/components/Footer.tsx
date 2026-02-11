export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ddd", marginTop: 40 }}>
      <div
        style={{ maxWidth: 900, margin: "0 auto", padding: 16, color: "#555" }}
      >
        © {new Date().getFullYear()} Sudanese Mythology — Built with Vite +
        React
      </div>
    </footer>
  );
}
