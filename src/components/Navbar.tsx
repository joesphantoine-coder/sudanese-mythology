import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    marginRight: 14,
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 8,
    color: "#111",
    background: isActive ? "#eee" : "transparent",
    fontWeight: isActive ? "700" : "500",
  });

  return (
    <header style={{ borderBottom: "1px solid #ddd" }}>
      <nav style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/sudanese-mythology" style={linkStyle}>
          Sudanese Mythology
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
