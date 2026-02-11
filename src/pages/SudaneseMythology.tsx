import { useMemo, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";

type Category = "All" | "Desert" | "River" | "Markets";

export default function SudaneseMythology() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return articles.filter((a) => {
      const matchesCategory =
        category === "All" ? true : a.category === category;
      const matchesQuery = !q
        ? true
        : (a.title + " " + a.summary).toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const categories: Category[] = ["All", "Desert", "River", "Markets"];

  return (
    <div>
      <h1>Sudanese Mythology</h1>
      <p>Choose an article:</p>

      <div
        style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "6px 10px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: c === category ? "#eee" : "white",
              cursor: "pointer",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        style={{
          width: "100%",
          maxWidth: 420,
          padding: 10,
          borderRadius: 10,
          border: "1px solid #ddd",
          marginBottom: 16,
        }}
      />

      {filtered.length === 0 ? (
        <p style={{ color: "#555" }}>No articles match your filters.</p>
      ) : (
        filtered.map((a) => <ArticleCard key={a.id} article={a} />)
      )}
    </div>
  );
}
