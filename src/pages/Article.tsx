import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function Article() {
  const { id } = useParams();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div>
        <h1>Article not found</h1>
        <Link to="/sudanese-mythology">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/sudanese-mythology">← Back to Sudanese Mythology</Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>{article.title}</h1>
        <span
          style={{
            fontSize: 12,
            padding: "4px 8px",
            borderRadius: 999,
            border: "1px solid #ddd",
            color: "#333",
            whiteSpace: "nowrap",
          }}
        >
          {article.category}
        </span>
      </div>

      <p style={{ color: "#555" }}>{article.summary}</p>

      {article.content.map((p, idx) => (
        <p key={idx} style={{ lineHeight: 1.7 }}>
          {p}
        </p>
      ))}
    </div>
  );
}
