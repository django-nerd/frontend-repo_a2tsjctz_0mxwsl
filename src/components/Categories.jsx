import { categories } from "./mockData";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/projects?category=${encodeURIComponent(cat)}`)}
            className="rounded-lg border bg-white py-3 px-4 text-sm hover:shadow transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
