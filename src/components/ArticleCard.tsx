import { Link } from "react-router-dom";
import type { Article } from "../data/articles";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div
      className="article-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 14,
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
      >
        <h3 style={{ margin: "0 0 6px" }}>{article.title}</h3>

        <span
          style={{
            fontSize: 12,
            padding: "4px 8px",
            borderRadius: 999,
            border: "1px solid #ddd",
            color: "#333",
            height: "fit-content",
            whiteSpace: "nowrap",
          }}
        >
          {article.category}
        </span>
      </div>

      <p style={{ margin: "0 0 10px", color: "#555" }}>{article.summary}</p>
      <Link to={`/article/${article.id}`}>Read →</Link>
    </div>
  );
}
