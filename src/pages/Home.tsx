import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section
        style={{
          border: "1px solid #ddd",
          borderRadius: 16,
          padding: 24,
          background: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
        }}
      >
        <h1 style={{ fontSize: 44, marginTop: 0 }}>
          Hoooooooooota testing 083752935789
        </h1>

        <p style={{ color: "#555", maxWidth: 700 }}>
          A simple website collecting short articles inspired by Sudanese
          folklore and storytelling traditions — built with Vite + React.
        </p>

        <div style={{ marginTop: 16 }}>
          <Link to="/sudanese-mythology">Explore articles →</Link>
        </div>
      </section>

      <section style={{ marginTop: 22 }}>
        <h3>What you’ll find</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "#444" }}>
          <li>Short, readable myth-inspired articles</li>
          <li>Search + category filters</li>
          <li>Clean navigation and simple layout</li>
        </ul>
      </section>
    </div>
  );
}
